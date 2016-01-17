angular.module("OnlineExam").controller("ResultController", function ($scope,$rootScope, ExamService, ResultService) {
    GetMcqExam();
    GetMcqExamAnswer();
    GetName();
    function GetMcqExamAnswer() {
        $scope.answer = ExamService.getMcqExamAnswer();
    };
    function GetMcqExam() {
        $scope.exam = ExamService.getExamToBeTaken();
    };
    function GetName() {
        $scope.participator = ExamService.getName();
    };

    
    
    function SubmitResult() {
        var Result = {
            Participator: $scope.participator,
            Time: new Date(),
            Exam: $scope.exam.Title,
            NumberOfQuestion: $scope.exam.NumberOfMcqQuestion,
            NumberOfRightAnswer: $scope.numberOfRightAnswer,
            NumberOfWrongAnswer: $scope.numberOfWrongAnswer
        };

        var getResultData = ResultService.addResult(Result);
        getResultData.then(function (result) { console.log("Result added" + result) }, function (error) { console.log(error)});
    }
    
    
    function init() {
        $scope.numberOfRightAnswer = 0;
        $scope.numberOfWrongAnswer = 0;
        var givenAnswers = $scope.answer.McqAnswers.split(',');
        $scope.correctAnswer = new Array($scope.exam.NumberOfMcqQuestion);
        $scope.correctAnsweredQuestion = new Array($scope.exam.NumberOfMcqQuestion);
        $scope.givenAnswer = new Array($scope.exam.NumberOfMcqQuestion);
        for (var i = 0; i < $scope.exam.NumberOfMcqQuestion; i++) {
            $scope.correctAnswer[i] = $scope.exam.McqQuestions[i].CorrectAnswer;
            $scope.givenAnswer[i] = givenAnswers[i];
            if ($scope.correctAnswer[i] == $scope.givenAnswer[i]) {
                $scope.numberOfRightAnswer++;
                $scope.correctAnsweredQuestion[i] = true;
            }
            else
                $scope.numberOfWrongAnswer++;
        }
    }
    init();
    SubmitResult();
});
