/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[],['$compileProvider',function($compileProvider){
    //console.log($compileProvider);
    $compileProvider.directive("customTags",function(){
        return {
            restrict:"ECAM",
            template:"<p>template-tags</p>",
            compile:function(){
                console.log(1);
            },
            replace:true
        }
    })
}]);

