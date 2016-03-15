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
                    name:"Java"
                },
                {
                    name:"javascript"
                },
                {
                    name:"CSS"
                }
            ]
            this.addBook=function(){
                console.log("add a book");
            }
            $scope.addBookDesk=function(){
                console.log("add a BookDesk");
            }
        },
        //为上边的controller指定一个名称，方便后边的依赖注入
        controllerAs:"bookListController",
        template:"<ul><li ng-repeat='book in books'>{{book.name}}</li></ul>",
        //bookListController通过依赖注入将指令中的controller注入到link中，使其能够通信
        link:function(scope,iElement,iAttrs,bookListController){
            console.log(scope);
            console.log(bookListController);
            iElement.on("click",bookListController.addBook);
            iElement.on("click",scope.addBookDesk);
        }
    }
})

myApp.controller("firstController",['$scope',function($scope){
    /*$scope.books=[
        {
            name:"Java"
        },
        {
            name:"javascript"
        },
        {
            name:"CSS"
        }
    ]*/
}])
