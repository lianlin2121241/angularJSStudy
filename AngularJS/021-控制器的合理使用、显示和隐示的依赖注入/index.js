/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[],function(){
});

/**
 * 显示依赖注入
 * */
myApp.factory("customService",['$window',function(a){
    return a;
}])

/**
 * 隐示依赖注入
 * */
myApp.controller("firstController", function ($scope,customService) {
    console.log($scope);
    console.log(customService);
})

/**
 * 显示依赖注入（推荐，防止压缩代码函数名被替换）
 * */
myApp.controller("secondController", ['$scope','$filter',function(a,b){
    console.log(a);
    console.log(b('json')([1,2,3,4,5]));
}])

/**
 * angularJS1.5已经移除此控制器实现方式
 * */
function otherController(a){
    console.log(a);
}
otherController.$inject=['$scope'];
