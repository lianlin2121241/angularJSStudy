/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[]);
myApp.factory("Data",function(){
    return {
        message:"这是共享资源"
    }
})
myApp.controller('firstController',function($scope,Data) {
    console.log($scope);
    $scope.data={
        name:"李明乐"
    };
    $scope.Data=Data;
})
myApp.controller('secondController',function($scope,Data) {
    console.log($scope);
    $scope.data=$scope.$$prevSibling.data;
    $scope.Data=Data;
})