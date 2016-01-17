angular.module("OnlineExam").controller("TakeExamController", function ($scope,$window, ExamService) {
    SetExamToBeTaken();
    $scope.examStarted = false;
    $scope.abcd = ["A", "B", "C", "D"];
    function SetExamToBeTaken() {
        $scope.examToBeTaken = ExamService.getExamToBeTaken();
       
    }
    $scope.UpdateExam = function () {
        var getUpdateExamData = ExamService.UpdateExam($scope.examToBeEdited);
    }
    
    $scope.SubmitAnswer = function () {
        $scope.answerSubmitted = true;
        var mcqAnswer = {
            McqAnswerId: null,
            Exam: $scope.examToBeTaken,
            McqAnswers: $scope.answer.toString()
        };
        var getAnswerData = ExamService.SubmitAnswer(mcqAnswer, $scope.participator);
       /* getAnswerData.then(function () {
            console.log("Anwer added");
        }, function (error) {
            alert(error);
        });*/
    };

    $scope.setAnswer = function (i, questionNumber) {
        $scope.givenAnswer[questionNumber] = [false, false, false, false];
        $scope.givenAnswer[questionNumber][i] = true;
        $scope.answer[questionNumber] = $scope.abcd[i];

    };

    var init = function () {
        $scope.givenAnswer = new Array($scope.examToBeTaken.NumberOfMcqQuestion);
        for (var i = 0; i < $scope.examToBeTaken.NumberOfMcqQuestion; i++) {
            $scope.givenAnswer[i] = [false, false, false, false];
        }
        $scope.answer = new Array($scope.examToBeTaken.NumberOfMcqQuestion);
        for (var i = 0; i < $scope.examToBeTaken.NumberOfMcqQuestion; i++)
            $scope.answer[i] = "X";
        

        $scope.timer = $scope.examToBeTaken.AllocatedTimeInMinute * 60;
        var target = $scope.timer;
        var current = 0;
        var timerId = setInterval(function () {
            current++;
            var seconds = (target - current);
            $scope.$apply(function () {
                $scope.timer = seconds;
                $scope.progress = (current/target) * 100;
                $scope.minutes = Math.floor(($scope.timer / 60));
                $scope.seconds = ($scope.timer % 60);
            });
           
            if (seconds == 0 || $scope.answerSubmitted) {
                $scope.SubmitAnswer();
                clearInterval(timerId)
                var url = "http://localhost:2444/Views/Home/Index.html#/Result";
                $window.location.href = url;
            }

        }, 1000);
    }
    init();
});
