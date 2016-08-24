/**
 * Created by Administrator on 16-2-29.
 */
angular.module('firstApp', [])
    .controller('firstController',function($scope) {
        /*$scope.name="李明乐";
        $scope.count=0;

        $scope.$watch("name",function(newValue,oldValue){
            ++$scope.count;
            if($scope.count>30){
                $scope.name="已改变30次"
            }
        })*/





        $scope.data={
            name:"",
            count:0
        }

        //$watch("监听对象",function,"如果监听对象为true")
        $scope.$watch("data.name",function(newValue,oldValue){
            ++$scope.data.count;
            if($scope.data.count>30){
                $scope.data.name="已改变30次"
            }
            console.log(newValue+"   "+oldValue)
        },true)
    })