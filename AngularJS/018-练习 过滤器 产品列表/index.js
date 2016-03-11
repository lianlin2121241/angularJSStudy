/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[]);

myApp.service("productData",function(){
    return [
        {
            id:132,
            name:"ipad",
            price:2430
        },
        {
            id:234,
            name:"ipad mini",
            price:2140
        },
        {
            id:345,
            name:"imac",
            price:8652
        },
        {
            id:456,
            name:"iphone",
            price:5620
        },
        {
            id:567,
            name:"xiaomi",
            price:1999
        }
    ]
})
myApp.controller('productController',function($scope,productData) {
    $scope.productData=productData;

    $scope.orderType="id";
    $scope.order="-";

    $scope.orderFun=function(type){
        $scope.orderType=type;
        if($scope.order=="-"){
            $scope.order="";
        }else{
            $scope.order="-";
        }
    }
})