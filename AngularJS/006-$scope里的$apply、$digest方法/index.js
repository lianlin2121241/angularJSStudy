/**
 * Created by Administrator on 16-2-29.
 */
angular.module('firstApp', [])
    .controller('firstController',function($scope) {
        $scope.name=new Date();
        setInterval(function(){
            $scope.$apply(function(){
                $scope.name=new Date();
            })
        },1000)
    })