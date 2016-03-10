/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[]);
myApp.controller('firstController',function($scope) {
    $scope.today=new Date();
})