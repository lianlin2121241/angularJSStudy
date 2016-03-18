/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module('firstApp', []);

myApp.controller("firstController",["$scope",function($scope){
    $scope.name="张三";
    $scope.age="12";
    console.log($scope);
}])