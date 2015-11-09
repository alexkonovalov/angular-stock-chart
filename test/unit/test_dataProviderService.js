beforeEach(module('myApp'));

describe("dataProviderService", function() {

    var response;

    beforeEach( inject( function(dataProviderService){
        response = dataProviderService.GetStockData(new Date(-8640000000000000), new Date());
    }));

    it('returns array', function(){

        expect(response).toBeDefined();
        expect(response).toEqual(jasmine.any(Array));

    });

    it('all array objects have specified fields of specified types', function(){

        response.every(function(element) {

            var date = element["date"];
            var spread = element["spread"];
            var price = element["price"];
            var yield = element["yield"];

            expect(date).toBeDefined();
            expect(price).toBeDefined();
            expect(yield).toBeDefined();

            expect(date).toEqual(jasmine.any(Number));
            expect(price).toEqual(jasmine.any(Number));
            expect(yield).toEqual(jasmine.any(Number));

            return true;

        });

    });

});
