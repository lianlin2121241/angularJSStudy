/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[]);

/**
 * 定义工厂，返回数据
 */
myApp.factory("Data",function(){
    return [
        {
            title:"title1",
            content:"content1"
        },
        {
            title:"title2",
            content:"content2"
        },
        {
            title:"title3",
            content:"content3"
        }
    ]
})

/**
 * 定义指令collapsePanel
 * 替换外层的框架代码
 * 设定控制器来处理全局的scope
 */
myApp.directive("collapsePanel",function(){
    return {
        restrict:"E",
        replace:true,
        template:"<div class='panel-group' ng-transclude></div>",
        transclude:true,
        controller:["$scope",function($scope){
            this.scopeArr=[];
            this.addScope=function(scope){
                this.scopeArr.push(scope);
            }
            this.changeOpen=function(targetScope){
                angular.forEach(this.scopeArr,function(scope){
                    if(targetScope==scope){
                        scope.isShow=true;
                    }else{
                        scope.isShow=false;
                    }
                })
            }
        }],
        controllerAs:"collapsePanelController"
    }
})

/**
 * 定义指令collapseItem
 * 替换内部每一个模块
 * 设定link，设置连接后，点击事件
 */
myApp.directive("collapseItem",function(){
    return {
        restrict:"E",
        replace:true,
        templateUrl:"tmp/tmpItem.html",
        scope:{
            a:"@heading"
        },
        transclude:true,
        require:"^collapsePanel",
        link:function(scope,iElement,iAttrs,collapsePanelController){
            scope.isShow=false;
            scope.changeOpen=function(){
                collapsePanelController.changeOpen(scope);
            }
            collapsePanelController.addScope(scope);
        }
    }
})

myApp.controller("firstController",["$scope","Data",function($scope,Data){
    $scope.data=Data;
}])
