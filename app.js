// Initialize app
var app = angular.module('cribster', ['ui.bootstrap','ui.tinymce']);

// Bind controllers
app.controller('TinyController', function($scope) {
    //var test = $window.innerWidth;
    $window.alert("sadsdasf");
    $scope.tinymceOptions = {
        resize: false,
        height: 300,
        width: 400,
        statusbar: false
    };
});

