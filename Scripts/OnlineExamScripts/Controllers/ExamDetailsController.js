angular.module("OnlineExam").controller("ExamDetailsController", function ($scope, ExamService) {
    SetDetails();
    function SetDetails () {
        $scope.mcqExamDetails = ExamService.getMcqExamDetails();
        console.log($scope.mcqExamDetails);
    }
})
