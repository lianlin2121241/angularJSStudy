/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[]);
myApp.controller('firstController',function($scope) {
        $scope.cart=[{
            id:"1232",
            name:"小米手机5",
            quantity:4,
            price:2000
        },{
            id:"1233",
            name:"iphone5",
            quantity:2,
            price:6500
        },{
            id:"1234",
            name:"mac3",
            quantity:4,
            price:8600
        },{
            id:"1235",
            name:"ipad4",
            quantity:5,
            price:3400
        }]

        /**
         * 计算总价
         * @returns 总价
         */
        $scope.totalPrice=function(){
            var total=0;
            angular.forEach($scope.cart,function(item){
                total+=item.quantity*item.price;
            })
            return total;
        }

        /**
         * 计算总数
         * @returns 总数
         */
        $scope.totalQuantity=function(){
            var total=0;
            angular.forEach($scope.cart,function(item){
                total+=item.quantity;
            })
            return total;
        }

        /**
         * 获取索引值
         * @param id
         * @returns 索引
         */
        var getItemIndex=function(id){
            var index=-1;
            angular.forEach($scope.cart,function(item,key){
                if(item.id==id){
                    index=key
                    return;
                }
            })
            return index;
        }

        /**
         * 添加商品数量
         * @param id 商品ID
         */
        $scope.add=function(id){
            var index=getItemIndex(id);

            ++$scope.cart[index].quantity;
        }

        /**
         * 减少商品数量
         * @param id 商品ID
         */
        $scope.reduce=function(id){
            var index=getItemIndex(id);
            var item=$scope.cart[index];
            if(item.quantity>1){
                --item.quantity;
            }else{
                var isDel=confirm("是否确定删除该商品？")
                if(isDel){
                    $scope.remove(id);
                }
            }
        }

        /**
         * 删除商品
         * @param id 商品ID
         */
        $scope.remove=function(id){
            var index=getItemIndex(id);

            $scope.cart.splice(index,1);
        }

        $scope.$watch("cart",function(newValue,oldValue){
            angular.forEach(newValue,function(item,index){
                if(item.quantity<1){
                    var isDel=confirm("确认是否删除该商品？");
                    if(isDel){
                        $scope.remove(item.id);
                    }else{
                        item.quantity=oldValue[index].quantity;
                    }
                }
            })
        },true)
    })