/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[],["$provide",function($provide){
    console.log("start");
    $provide.constant("APIKEY","XXXXX");
}]);

//此方法首先运行，他可以用来声明全局常量
//constant,可以注入到任何方法中
myApp.constant("APIKEY","XXXXX");

//value,只能注入到controller和run中不能注入到config中
myApp.value("V","1.01");

myApp.config(function(APIKEY){
    console.log(APIKEY);
    console.log("config");
})

//run,config之后controller之前执行
//比如加载模板，需要在使用之前放入缓存，或者在操作前判断是否登录
myApp.run(function(APIKEY,V){
    //console.log(APIKEY);
    //console.log(V);
    console.log("run");
})

myApp.controller("firstController",["$scope","APIKEY","V",function($scope,APIKEY,V){
    console.log(APIKEY);
    console.log(V);
    console.log("controller");
}])


