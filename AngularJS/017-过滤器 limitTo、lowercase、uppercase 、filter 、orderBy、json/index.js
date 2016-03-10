/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[]);

myApp.factory("Data",function(){
    return {
        message:"Hello World",
        city:[
            {
                name:"上海",
                py:"shanghai"
            },
            {
                name:"北京",
                py:"beijing"
            },
            {
                name:"天津",
                py:"tianjin"
            }
        ]
    }
})
myApp.controller('firstController',function($scope,Data,$filter) {
    $scope.data=Data;

    //过滤器
    var number=$filter("number")(3231244);
    var jsonString=$filter("json")($scope.data);
    console.log(number);
    console.log(jsonString);

    $scope.checkName=function(obj){
        console.log(obj);
        if(obj.py.indexOf("h")==-1)
            return false;
        return true;
    }
})