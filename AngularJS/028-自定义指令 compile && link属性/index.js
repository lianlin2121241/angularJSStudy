/**
 * Created by Administrator on 16-2-29.
 */
var i = 0;
var myApp = angular.module("myApp", [], function () {
});


myApp.directive("customDir1", function () {
    return {
        restrict: "ECAM",
        template: "<div>{{user.name}}</div>",
        replace: true,
        compile:function(tElement,tAttrs,transclude){
            //主要用于编译阶段，添加dom节点
            console.log("customDir1 compile 编译阶段……");
            tElement.append(angular.element("<div>{{user.name}} {{user.count}}</div>"));
            return {
                //preLink，编译阶段之后，指令链接到子元素之前执行
                pre:function preLink(scope,iElement,iAttrs,controller){
                    console.log("customDir1 preLink ……");
                },
                //postLink主要用来绑定事件，所有子元素指令链接完成后运行
                post:function postLink(scope,iElement,iAttrs,controller){
                    console.log("customDir1 postLink ……");
                    console.log(scope);
                    iElement.on("click",function(){
                        //需要手动触发脏检查
                        scope.$apply(function(){
                            scope.user.name="after click";
                            scope.user.count=++i;
                            //执行一次脏检查
                        })
                    })
                }
            }

            /*return function(){
                console.log("返回单个link，为postLink");
            }*/
        },
        //定义compile无需定义link
        //link指postLink
        link:function(){

        }
    }
})

myApp.directive("customDir2", function () {
    return {
        restrict: "ECAM",
        replace: true,
        compile:function(tElement,tAttrs,transclude){
            console.log("customDir2 compile 编译阶段……");
            return {
                pre:function preLink(scope,iElement,iAttrs,controller){
                    console.log("customDir2 preLink ……");
                },
                post:function postLink(scope,iElement,iAttrs,controller){
                    console.log("customDir2 postLink ……");
                }
            }
        }
    }
})

myApp.directive("customDir3", function () {
    return function(){
        console.log("如果返回function，此处为postLink");
    }
})


myApp.controller("firstController", ["$scope", function ($scope) {
    $scope.users = [
        {
            name: "张三",
            id: "001"
        },
        {
            name: "李四",
            id: "002"
        }
    ];
}])

