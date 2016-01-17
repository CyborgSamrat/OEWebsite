angular.module("OnlineExam").service("ExamService",
function ($http) {
    var urlbase = "http://localhost:17012/api/McqExams";
    var urlbaseAnswer = "http://localhost:17012/api/McqAnswers";
    
    this.AddExam = function (mcqExam) {
        var response = $http({
            method: "post",
            url: urlbase,
            data: JSON.stringify(mcqExam),
            dataType: "json"
        });
        return response;
    };

    this.GetAllMcqExams = function () {
        return $http({
            method: "get",
            url: urlbase
        });
    };

    this.UpdateExam = function (exam) {
        var response = $http({
            method: "put",
            url: urlbase,
            data: JSON.stringify(exam),
            dataType: "json",
            params: {
                id: exam.McqExamId
            }
        });
        return response;
    };

    this.setMcqExamDetails = function (exam) {
        this.mcqExamDetails = exam;
    };

    this.getMcqExamDetails = function () {
        return this.mcqExamDetails;
    };

    this.DeleteExam = function (qid) {
        var response = $http({
            method: "delete",
            url: urlbase,
            params: {
                id: qid
            }
        });
        return response;
    };

    this.setExamToBeEdited = function (exam) {
        this.examToBeEdited = exam;
    };
    this.getExamToBeEdited = function () {
        return this.examToBeEdited;
    };

    this.setExamToBeTaken = function (exam) {
        this.examToBeTaken = exam;
    };
    this.getExamToBeTaken = function () {
        return this.examToBeTaken;
    };

    this.SubmitAnswer = function (answer, name) {
        this.mcqExamAnswer = answer;
        this.participator = name;
        /*var response = $http({
            method: "post",
            url: urlbaseAnswer,
            data: JSON.stringify(answer),
            dataType: "json"
        });
        return response;*/
    };

    this.getMcqExamAnswer = function () {
        return this.mcqExamAnswer;
    };
    this.setName = function (name) {
        this.participator = name;
    };
    this.getName = function () {
        return this.participator;
    };
});