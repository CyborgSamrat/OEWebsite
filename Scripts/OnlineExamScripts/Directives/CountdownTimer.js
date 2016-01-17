angular.module("OnlineExam").directive('countdowntimer', function () {
    return {
        restrict: 'EA',
        templateUrl: '../../../Views/DirectiveTemplates/CountdownTimer.html',
        link: function (scope, elm, attr) {
            var target = 10000;
            var current = 0;
            var countdown = document.getElementById("countdown");
            setInterval(function () {
                console.log("Timer Running");
                current += 1000;
                var seconds = (target - current) / 1000;
                countdown.innerHTML = seconds + "Seconds";

            }, 1000);
        }
    }
})