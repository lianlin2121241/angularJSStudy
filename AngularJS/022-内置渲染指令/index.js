/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[],function(){
});

myApp.controller("firstController",function($scope){
    $scope.state=false;

    //切换状态
    $scope.changeState=function(event){
        angular.element(event.target).html("状态切换为："+$scope.state);
        $scope.state=!$scope.state;
    }
})

