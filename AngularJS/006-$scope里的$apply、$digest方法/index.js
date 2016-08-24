/**
 * Created by Administrator on 16-2-29.
 */
angular.module('firstApp', [])
    .controller('firstController',function($scope) {
        $scope.name=new Date();
        setInterval(function(){
            //$apply触发脏检查
            $scope.$apply(function(){
                $scope.name=new Date();
            })
        },1000)
    })