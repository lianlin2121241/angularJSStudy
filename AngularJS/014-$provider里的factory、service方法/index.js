/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[],function($provide){
    $provide.provider("CustomService",function(){
        this.$get=function(){
            return {
                message:"CustomService Message"
            }
        }
    })
    //自定义工厂
    $provide.factory("CustomFactory",function(){
        return [1,2,1,3,3,6,5,4,8];

    })
    //自定义服务 必须为引用类型
    $provide.service("CustomService2",function(){
        return "fwefwe";//打印为空对象，返回必须为引用类型

    })
});
myApp.controller('firstController',function($scope,CustomFactory,CustomService2) {
    $scope.name="李明乐";
    console.log(CustomFactory);
    console.log(CustomService2);
})