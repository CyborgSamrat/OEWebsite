angular.module("OnlineExam").controller("QuestionController",
    function ($scope, QuestionService, $state, $window) {
        //ClearFields();

        $scope.divQuestionList = true;
        GetAllMcqQuestions();



        $scope.divCreateQuestion = false;
        $scope.divDeleteQuestion = false;
        $scope.divQuestionDetails = false;
        $scope.CreateQuestionDiv = function () {
            $scope.divCreateQuestion = true;
            $scope.ClearFields();
        };
        $scope.HideList = function () {
            $scope.divQuestionList = false;
        };

        $scope.ShowList = function () {
            $scope.divQuestionList = true;
        }

        $scope.SetQuestionToBeEdited = function (question) {
            QuestionService.SetQuestionToBeEdited(question);
        };

        $scope.abcd = ['A', 'B', 'C', 'D'];
       
        $scope.setAnswer = function (i) {
            $scope.correctAnswer = [false, false, false, false];
            for (var n = 0; n < 4; n++)
                $scope.correctAnswer[n] = false;
            $scope.correctAnswer[i] = true;
            $scope.ca = $scope.abcd[i];
            
        };


        $scope.AddQuestion = function () {
            var McqQuestion = {
                SubjectCode: $scope.subjectCode,
                DifficultyLevel: $scope.difficultyLevel,
                Class: $scope.class,
                QuestionText: $scope.questionText,
                OptionA: $scope.optionA,
                OptionB: $scope.optionB,
                OptionC: $scope.optionC,
                OptionD: $scope.optionD,
                CorrectAnswer: $scope.ca
            };
            var getQuestionData = QuestionService.AddQuestion(McqQuestion);

            getQuestionData.then(function (msg) {
                $scope.divCreateQuestion = false;
                $scope.ShowList();
               // $state.go('Main');
                $scope.ClearFields();
            },
            function () {
                alert("Error in adding question!");
            });
            $scope.divQuestionList = true;

        }

        function GetAllMcqQuestions() {
            var GetMcqQuestionsData = QuestionService.GetAllMcqQuestions();
            GetMcqQuestionsData.then(function (questions) {
                $scope.mcqQuestions = questions.data;
            }, function () {
                alert("Error getting question data");
            });

        }

        $scope.GetMcqQuestionById = function (questionId) {
            console.log(questionId);
            var getMcqQuestionData = QuestionService.GetMcqQuestionById(questionId);
            getMcqQuestionData.success(function (question) {
                var mcqQuestion = question;
                console.log($scope.questionText);
                $scope.mcqQuestionId = mcqQuestion.McqQuestionId;
                $scope.questionText = mcqQuestion.QuestionText;
                console.log($scope.questionText);
                $scope.subjectCode = mcqQuestion.SubjectCode;
                $scope.difficultyLevel = mcqQuestion.DifficultyLevel;
                $scope.class = mcqQuestion.Class;
                $scope.optionA = mcqQuestion.OptionA;
                $scope.optionB = mcqQuestion.OptionB;
                $scope.optionC = mcqQuestion.OptionC;
                $scope.optionD = mcqQuestion.OptionD;
                var ca = mcqQuestion.CorrectAnswer;
                
                switch (ca) {
                    case "A": $scope.setAnswer(0); break;
                    case "B": $scope.setAnswer(1); break;
                    case "C": $scope.setAnswer(2); break;
                    case "D": $scope.setAnswer(3); break;
                }
            }, function (error) {
                console.log(error);
            });
        }

        $scope.CreateDeleteQuestionDiv = function(question){
            $scope.questionToBeDeleted = question;
            $scope.divDeleteQuestion = true;
        }
        $scope.HideDeleteQuestionDiv=function(){
            $scope.divDeleteQuestion = false;

        }

        $scope.DeleteQuestion = function (id) {
            var getDeleteData = QuestionService.DeleteQuestion(id);
            getDeleteData.then(function () {
            }, function (error) {
                console.log(error);
            });
            console.log("deleted" + id);
            $scope.divDeleteQuestion = false;

        }

        $scope.ViewQuestionDetailsDiv = function(question){
            $scope.questionToViewDetails = question;
            $scope.divQuestionDetails = true;
        }
        $scope.HideQuestionDetailsDiv = function () {
            $scope.divQuestionDetails = false;

        }

        $scope.CancelCreatingQuestion = function () {
            $scope.ClearFields();
           // $state.go('Main');
        }


        $scope.ClearFields =  function() {
            $scope.questionText = "";
            $scope.optionA = "";
            $scope.optionB = "";
            $scope.optionC = "";
            $scope.optionD = "";
            $scope.ca = false;
            console.log("Cleared");
        }
    });