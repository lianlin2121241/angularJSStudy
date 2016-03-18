/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module('firstApp', []);

myApp.controller("firstController",["$scope",function($scope){
    $scope.name="张三";
    console.log($scope);
}])

myApp.controller("secondController",["$scope",function($scope){
    console.log($scope);
}])

//相当于作用域链
function first(){
    var name="张三";
    function second(){
        //如果里边没有变量name会向上查找
    }
}