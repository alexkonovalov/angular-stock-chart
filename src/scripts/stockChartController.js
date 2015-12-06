
app.controller("stockChartController", ["$scope", "dataProviderService", function ($scope, dataProviderService) {

    $scope.shownRange = "max";
    $scope.shownValueProp = "yield";
    $scope.chartData = [];

    var getDataForChart = function(valueProp, range) {
        var minDate;
        var maxDate;

        switch (range) {
            case "week":
                minDate = Date.parse('Dec 21, 2014');
                maxDate = Date.parse('Dec 27, 2014');
                break;
            case "month":
                minDate = Date.parse('Dec 1, 2014');
                maxDate = Date.parse('Dec 31, 2014');
                break;
            case "quarter":
                minDate = Date.parse('Oct 1, 2014');
                maxDate = Date.parse('Dec 31, 2014');
                break;
            case "year":
                minDate = Date.parse('Jan 1, 2014');
                maxDate = Date.parse('Dec 31, 2014');
                break;
            case "max":
                minDate = new Date(-8640000000000000);
                maxDate = new Date();
                break;
            default:
                minDate = new Date(-8640000000000000);
                maxDate = new Date();
        }

        var source = dataProviderService.GetStockData(minDate, maxDate);

        return transformDataForChart(source, valueProp);
    };

    var transformDataForChart = function (source, valuePropName) {

        var transformedData = [];

        angular.forEach(source, function (obj) {
            var object = {
                date: obj.date,
                value: +obj[valuePropName]
            };

            transformedData.push(object);
        });

        return transformedData;
    }


    $scope.showYield = function() {
        $scope.shownValueProp = "yield";
        $scope.chartData = getDataForChart($scope.shownValueProp, $scope.shownRange);
    }

    $scope.showSpread = function() {
        $scope.shownValueProp = "spread";
        $scope.chartData = getDataForChart($scope.shownValueProp, $scope.shownRange);
    }

    $scope.showPrice = function() {
        $scope.shownValueProp = "price";
        $scope.chartData = getDataForChart($scope.shownValueProp, $scope.shownRange);
    }

    $scope.changeRange = function(newRange) {
        $scope.shownRange = newRange;
        $scope.chartData = getDataForChart($scope.shownValueProp, $scope.shownRange);
    }


}]);