angular.module("OnlineExam").controller("EditQuestionController",
    function ($scope, QuestionService, $state, $window) {
        //ClearFields();
        function SetQuestionToBeEdited() {
            var question = QuestionService.GetQuestionToBeEdited();
            $scope.questionToBeEdited = question;
        }
        

        $scope.abcd = ['A', 'B', 'C', 'D'];

        $scope.setAnswer = function (i) {
            $scope.correctAnswer = [false, false, false, false];
            for (var n = 0; n < 4; n++)
                $scope.correctAnswer[n] = false;
            $scope.correctAnswer[i] = true;
            $scope.ca = $scope.abcd[i];

        }; 
        $scope.setCorrectAnswer = function(answer){
            switch (answer) {
                case "A": $scope.setAnswer(0); break;
                case "B": $scope.setAnswer(1); break;
                case "C": $scope.setAnswer(2); break;
                case "D": $scope.setAnswer(3); break;
            }
        }

        $scope.UpdateQuestion = function () {
            $scope.questionToBeEdited.CorrectAnswer = $scope.ca;
            var getQuestionData = QuestionService.UpdateQuestion($scope.questionToBeEdited.McqQuestionId, $scope.questionToBeEdited);

            getQuestionData.then(function (msg) {
                $scope.ClearFields();
                var url = "http://" + $window.location.host + "/Views/Home/Index.html";
                $window.location.href = url;
                // $state.go('Main');

            },
            function () {
                alert("Error in updating question!");
            });
            $scope.divQuestionList = true;
        };

      
       

        $scope.CancelCreatingQuestion = function () {
            $scope.ClearFields();
        }


        $scope.ClearFields = function () {
            $scope.questionText = "";
            $scope.optionA = "";
            $scope.optionB = "";
            $scope.optionC = "";
            $scope.optionD = "";
            $scope.ca = false;
            console.log("Cleared");
        }

        function init() {
            SetQuestionToBeEdited();
            $scope.setCorrectAnswer($scope.questionToBeEdited.CorrectAnswer);
        }

        init();
    });