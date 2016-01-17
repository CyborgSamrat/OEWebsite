angular.module("OnlineExam").controller("TestResultController", function ($scope, ResultService) {
    GetAllResults();
    function GetAllResults() {
        var getResultsData = ResultService.getAllResults();
        getResultsData.then(function (result) {
            $scope.results = result.data.value;
        }, function (error) {
            console.log("Error geting results" + error);
        });

    }
});
