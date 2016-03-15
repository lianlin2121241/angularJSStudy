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

    //节点指令自定义样式
    $scope.defaultStyle={
        "color":"red",
        "margin-top":"20px"
    }

    $scope.src="https://sci1-1.am.microsoft.com/291465942759080852/160-235.jpg";
})

