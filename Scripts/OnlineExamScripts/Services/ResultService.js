angular.module("OnlineExam").service("ResultService", function ($http) {
    var urlodata = "http://localhost:18679/odata/Results";
    this.addResult = function (result) {
        var response = $http({
            method: "post",
            url: urlodata,
            data: JSON.stringify(result),
            dataType: "json"
        });
        return response;
    }

    this.getAllResults = function () {
        var response = $http({
            method: "get",
            url: urlodata
        });

        return response;
    }
})
