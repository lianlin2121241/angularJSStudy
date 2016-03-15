/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[],function(){});


/**
 * ng-transclude将老数据引用出来
 */
myApp.directive("customDir",function(){
    return {
        restrict:"ECAM",
        template:"<div>新数据 <span ng-transclude></span></div>",
        replace:true,
        transclude:true
    }
})


/**
 * priority设置优先级
 */
myApp.directive("customDir1",function(){
    return {
        restrict:"ECAM",
        template:"<div>我是第一个directive</div>",
        replace:true,
        transclude:true,
        priority:-1
    }
})
myApp.directive("customDir2",function(){
    return {
        restrict:"ECAM",
        template:"<div>我是第二个directive <span ng-transclude></span></div>",
        replace:true,
        transclude:true,
        priority:0,
        //优先级小于0的directive都不会执行
        terminal:true
    }
})

myApp.controller("firstController",["$scope",function($scope){
    $scope.name="张三";
}])

