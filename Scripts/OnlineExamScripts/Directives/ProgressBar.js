angular.module("OnlineExam").directive('progressbar', function () {
    return {
        templateUrl: '../../../Views/DirectiveTemplates/ProgressBar.html',
        scope: {
            progress: '='
        }
    }
});