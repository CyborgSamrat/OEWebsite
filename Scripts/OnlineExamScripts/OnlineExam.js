angular.module("OnlineExam", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("Main", {
            url: "/",
            templateUrl: "../PartialViews/Main.html"
        })
        .state("Questions", {
            url: "/Questions",
            templateUrl: "../PartialViews/Questions/Questions.html"
        })
       .state("CreateQuestion", {
           url: "/CreateQuestion",
           templateUrl: "../PartialViews/Questions/CreateQuestion.html",
       })
    .state("EditQuestion", {
        url: "/EditQuestion",
        templateUrl: "../PartialViews/Questions/EditQuestion.html"
    })
        .state("Exams", {
            url: "/Exams",
            templateUrl:"../PartialViews/Exams/Exams.html"
        })
    .state("CreateExam", {
        url: "/CreateExam",
        templateUrl: "../PartialViews/Exams/CreateExam.html"
    })
    .state("EditExam", {
        url: "/EditExam",
        templateUrl: "../PartialViews/Exams/EditExam.html"
    })
    .state("ExamDetails", {
        url: "/ExamDetails",
        templateUrl: "../PartialViews/Exams/ExamDetails.html"

    })
    .state("TakeExam", {
        url: "/TakeExam",
        templateUrl: "../PartialViews/Exams/TakeExam.html"

    })
    .state("Result", {
        url: "/Result",
        templateUrl: "../PartialViews/Exams/Result.html"

    })
     .state("Results", {
         url: "/Results",
         templateUrl: "../PartialViews/Result/Results.html"

     })
});
