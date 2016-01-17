angular.module("OnlineExam").controller("ExamController", function ($scope,$rootScope,$window,$state, ExamService) {

    $rootScope.participator = "Annonymous";
    GetAllMcqExams();
    $scope.AddExam = function () {
        var McqExam = {
            Title: $scope.title,
            Type: $scope.type,
            CourseName: $scope.courseName,
            FullMarks: $scope.fullMarks,
            ExamTime: $scope.examTime,
            AllocatedTimeInMinute: $scope.allocatedTimeInMinute,
            DifficultyLevel: $scope.difficultyLevel,
            NumberOfMcqQuestion: $scope.numberOfQuestions,
        };
        var getExamData = ExamService.AddExam(McqExam);

        getExamData.then(function (msg) {
        },
        function () {
            alert("Error in creating exam!");
        });
        $scope.divQuestionList = true;

    }

    function GetAllMcqExams() {
        var GetMcqExamsData = ExamService.GetAllMcqExams();
        GetMcqExamsData.then(function (exams) {
            $scope.mcqExams = exams.data;
        }, function () {
            alert("Error getting exam data");
        });
    }

    $scope.SetViewDetails = function (exam) {
        ExamService.setMcqExamDetails(exam);
    }
    $scope.DeleteExamDiv = function (id, title) {
        $scope.deleteExamDiv = true;
        $scope.examToBeDeletedTitle = title;
        $scope.examToBeDeletedId = id;
    }
    $scope.HideDeleteExamDiv = function () {
        $scope.deleteExamDiv = false;
    }

    $scope.DeleteExam = function(id){
        var getDeleteData = ExamService.DeleteExam(id);
        getDeleteData.then(function () {
        }, function (error) {
            console.log(error);
        });
        console.log("deleted" + id);
        $scope.HideDeleteExamDiv();
    }

    $scope.CancelCreatingExam = function () {
        console.log("Yeah");
       
    }

    $scope.StartExam = function (participator) {
        ExamService.setName(participator);
    }

    $scope.SetExamToBeEdited = function(exam){
        ExamService.setExamToBeEdited(exam);
    }

    $scope.SetExamToBeTaken = function (exam) {
        ExamService.setExamToBeTaken(exam);
        $scope.takeExamDiv = true;
        $scope.examToBeTakenTitle = exam.Title;
        $scope.examToBeTakenTime = exam.AllocatedTimeInMinute;
        $scope.examToBeTakenFullMarks = exam.FullMarks;
        $scope.examToBeTakenCourseName = exam.CourseName;
    }
});
