beforeEach(module('myApp'));

describe("stockChartController", function() {

    //test data constants begin /should all be different
    var firstYield = 110.3;
    var lastYeild = 120.8;

    var firstSpread = 19.04;
    var lastSpread = 67.82;

    var firstPrice = 23.39;
    var lastPrice = 97.13;

    var firstDate = "Jan 01, 2000";
    var lastDate = "Jan 01, 2018";

    //test data constands end

    var yieldStringName = "yield";
    var spreadStringName = "spread";
    var priceStringName = "price";


    var scope, createController;

    beforeEach(module(function($provide) {
            $provide.service('dataProviderService', function() {
                //todo add filtering logic
                this.GetStockData = jasmine.createSpy('GetStockData').andCallFake(function(dateFrom, dateTo) {

                    var data = [
                        { date: firstDate, yield: firstYield, spread: firstSpread, price: firstPrice },
                        { date: lastDate, yield: lastYeild, spread: lastSpread, price: lastPrice }];

                    angular.forEach(data, function (obj) {
                        obj.date = Date.parse(obj.date);
                    });

                    return data;

                });

            });
        }
    ));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('stockChartController', {
                '$scope': scope
            });
        };

    }));

    it("shownRange holds the right value", function(){
        createController();
        expect(scope.shownRange).toBeDefined();

        var shownRangeValues = ["week","month", "quarter", "year", "max"];
        expect(shownRangeValues).toContain(scope.shownRange);

    });


    it("shownValueProp holds the right value", function(){
        createController();
        expect(scope.shownValueProp).toBeDefined();

        var shownValuePropValues = [yieldStringName,spreadStringName, priceStringName];
        expect(shownValuePropValues).toContain(scope.shownValueProp);

    });

    it("showYield, showSpread, showPrice turn chartData to an array", function(){
        createController();

        expect(scope.showYield).toBeDefined();
        expect(scope.showSpread).toBeDefined();
        expect(scope.showPrice).toBeDefined();

        scope.showYield();
        checkForArray();

        scope.showSpread();
        checkForArray();

        scope.showPrice();
        checkForArray();

        function checkForArray() {
            expect(scope.chartData).toBeDefined();
            expect(scope.chartData).toEqual(jasmine.any(Array));
        }

    });


    it("showYield returns yield", function(){
        createController();
        scope.showYield();

        expect(scope.shownValueProp).toBeDefined();
        expect(scope.shownValueProp).toBe(yieldStringName);

        expect(scope.chartData[0]).toEqual({date : Date.parse(firstDate), value: firstYield});

    });

    it("showSpread returns spread", function(){
        createController();
        scope.showSpread();

        expect(scope.shownValueProp).toBeDefined();
        expect(scope.shownValueProp).toBe(spreadStringName);

        expect(scope.chartData[0]).toEqual({date : Date.parse(firstDate), value: firstSpread});

    });

    it("showPrice returns price", function(){
        createController();
        scope.showPrice();

        expect(scope.shownValueProp).toBeDefined();
        expect(scope.shownValueProp).toBe(priceStringName);

        expect(scope.chartData[0]).toEqual({date : Date.parse(firstDate), value: firstPrice});

    });

});
