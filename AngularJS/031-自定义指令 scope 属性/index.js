/**
 * Created by Administrator on 16-2-29.
 */
var myApp = angular.module("myApp", [], function () {
});

myApp.directive("bookList",function(){
    return {
        restrict:"ECAM",
        controller:function($scope){
            //$scope.books=$scope.a();

            $scope.books=$scope.b;
            $scope.books.push({name:"NodeJS"});

            $scope.title=$scope.c;
            console.log($scope.c);
        },
        //scope:false~controller和directive中的$scope相同
        //scope:"false",

        //scope:true~directive中的$scope继承于controller中的$scope
        //scope:true,

        //scope:obj~会创建一个独立的$scope
        scope:{
            //&:作用域把父作用域封装成一个函数，从而以函数的形式读写父作用域的属性
            //a:"&books"
            //=:作用域的属性与父元素作用域的属性双向绑定，任何一方修改均影响对方
            b:"=booksParent",
            //@:只能读取父作用域里值单项绑定，只能是简单数据类型，字符串
            c:"@booksTitle"
        },
        controllerAs:"bookListController",
        template:"<div><p>{{title}}</p><ul><li ng-repeat='book in books'>{{book.name}}</li></ul></div>"
    }
})

myApp.controller("firstController",['$scope',function($scope){
    console.log($scope);
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
    $scope.title="bookStore";
}])
