angular.module("OnlineExam").controller("EditExamController", function ($scope, ExamService) {
    SetExamToBeEdited();
    function SetExamToBeEdited() {
        $scope.examToBeEdited = ExamService.getExamToBeEdited();
    }
    $scope.UpdateExam = function () {
        var getUpdateExamData = ExamService.UpdateExam($scope.examToBeEdited);
    }
}) ;
