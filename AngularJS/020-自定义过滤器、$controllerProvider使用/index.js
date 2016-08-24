/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[],function($provide,$filterProvider,$controllerProvider){
    /**
     * 通过依赖注入注册服务
     * */
    $provide.service("Data",function(){
        return [
            {
                name:"张三",
                age:20,
                city:"北京"
            },
            {
                name:"李四",
                age:30,
                city:"上海"
            }
        ]
    })

    /**
     * 通过依赖注入注册过滤器
     * */
    /*$filterProvider.register("filterAge",function(){
        return function(data){
            var newArr=[];
            angular.forEach(data,function(obj){
                if(obj.age<=20){
                    newArr.push(obj);
                }
            })
            return newArr;
        }
    })*/

    /**
     * 通过依赖注入注册控制器
     * */
    /*$controllerProvider.register("filterController", function ($scope,Data) {
        $scope.data=Data;
    })*/
});

/**
 * 自定义过滤器
 * */
myApp.filter("filterCity",function(){
    return function(data){
        var newArr=[];
        angular.forEach(data,function(obj){
            if(obj.city=="上海"){
                newArr.push(obj)
            }
        })
        return newArr;
    }
})

myApp.controller("filterController",function($scope,Data){
    $scope.data=Data;
})
