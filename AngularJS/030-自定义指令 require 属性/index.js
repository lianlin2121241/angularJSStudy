/**
 * Created by Administrator on 16-2-29.
 */
var myApp = angular.module("myApp", [], function () {
});

myApp.directive("bookList",function(){
    return {
        restrict:"ECAM",
        controller:function($scope){
            $scope.books=[
                {
                    name:"JAVA"
                },
                {
                    name:"CSS"
                },
                {
                    name:"JavaScript"
                }
            ]
            this.addBook=function(){
                //$scope.$apply脏检查
                $scope.$apply(function(){
                    $scope.books.push({
                        name:"AngularJS"
                    })
                })
            }
        },
        controllerAs:"bookListController",
        template:"<div><ul><li ng-repeat='book in books'>{{book.name}}</li></ul><book-add></book-add></div>"
    }
})

/**
 * require 可以将其他指令传递给自己
 * directiveName:通过驼峰的命名指定了控制器应该带有哪一条指令，默认会从同一元素上的指令
 * ^directiveName:在父级查找指令
 * ？directiveName:表示指令可选，如果找不到不需要抛出异常
 */
myApp.directive("bookAdd",function(){
    return {
        restrict:"ECAM",
        require:"^bookList",
        template:"<input type='button' value='添加'/>",
        link:function(scope,iElement,iAttrs,bookListController){
            iElement.on("click",bookListController.addBook)
        }
    }
})

myApp.controller("firstController",['$scope',function($scope){
}])
