/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[],function(){});


/**
 * 模板链接-模板地址相对于index页面路径
 */
myApp.directive("customDir",function(){
    return {
        restrict:"ECAM",
        templateUrl:"tmp/tmp1.html",
        replace:true
    }
})

/**
 * 模板链接内容中加text/ng-template的script标签ID
 */
myApp.directive("customDir1",function(){
    return {
        restrict:"ECAM",
        templateUrl:"tempCustom",
        replace:true
    }
})

myApp.controller("firstController",["$scope",function($scope){
    $scope.name="张三";
}])

