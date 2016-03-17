/**
 * Created by Administrator on 16-2-29.
 */
var myApp=angular.module("myApp",[]);

myApp.factory("Data",function(){
    return {
        sex:1,
        hobby:[1,3],
        city:12
    }
})

//城市数据
myApp.factory("cityData",function(){
    return [
        {
            name:"北京",
            parent:0,
            id:1
        },
        {
            name:"天津",
            parent:0,
            id:2
        },
        {
            name:"浙江",
            parent:0,
            id:3
        },
        {
            name:"北京市",
            parent:1,
            id:4
        },
        {
            name:"天津市",
            parent:2,
            id:5
        },
        {
            name:"杭州市",
            parent:3,
            id:6
        },
        {
            name:"萧山区",
            parent:3,
            id:7
        },
        {
            name:"东城区",
            parent:4,
            id:8
        },
        {
            name:"津南区",
            parent:5,
            id:9
        },
        {
            name:"大港区",
            parent:5,
            id:10
        },
        {
            name:"萧山机场",
            parent:7,
            id:11
        },
        {
            name:"上虞",
            parent:7,
            id:12
        },
        {
            name:"西湖区",
            parent:6,
            id:13
        },
        {
            name:"东湖区",
            parent:6,
            id:14
        },
    ]
})

/**
 * 自定义过滤器filterCity，根据parent过滤显示城市
 */
myApp.filter("filterCity",function(){
    return function(data,parent){
        var cityArr=[];
        angular.forEach(data,function(city){
            if(city.parent==parent){
                cityArr.push(city);
            }
        })
        return cityArr;
    }
})

myApp.controller("firstController",["$scope","Data","cityData",function($scope,Data,cityData){
    var that=this;
    //爱好
    $scope.hobbys=[
        {
            id:1,
            name:"玩游戏"
        },
        {
            id:2,
            name:"写代码"
        },
        {
            id:3,
            name:"睡觉觉"
        }
    ]

    $scope.data=Data;

    //备份一份原始数据
    $scope.origDate=angular.copy($scope.data);

    $scope.cityData=cityData;

    //根据城市id获取上级城市ID
    this.getParentCityId=function(id){
        var tempId=0;
        angular.forEach($scope.cityData,function(city){
            if(city.id==id){
                tempId=city.parent;
                return;
            }
        })
        return tempId;
    }

    //如果选中city为区域和省赋值
    this.setCity=function(){
        if($scope.data.city!=undefined){
            $scope.data.area=this.getParentCityId($scope.data.city);
            $scope.data.province=this.getParentCityId($scope.data.area);
        }
    }

    this.setCity();

    $scope.resetForm=function(){
        $scope.data=angular.copy($scope.origDate);
        $scope.myForm.$setPristine();
        that.setCity();
    }


    //更改爱好函数，控制￥scope.data数组的值
    $scope.changeHobbyState=function(hobby){
        if($scope.data.hobby==undefined){
            $scope.data.hobby=[];
        }
        var index=$scope.data.hobby.indexOf(hobby);
        if(index==-1){
            $scope.data.hobby.push(hobby);
        }else{
            $scope.data.hobby.splice(index,1);
        }
        console.log($scope.data.hobby);
    }
}])

/**
 * 自定义验证
 * 引入ngModel指令
 * 注入ngModelController控制器
 * 为ngModelController.$parsers添加函数
 * 设置ngModelController的$setValidity  even值为true
 * $parsers属性：保存了从viewValue到modelValue过程中的处理函数，他们将来会一次执行
 * $formatters属性：保存了从modelValue到viewValue过程中的处理函数，他们将来会一次执行
 * $setViewValue方法：当view发生某件事情时，从view向model绑定调用
 * $setViewValue方法：把viewValue保存下来
 * $render方法：当模型发生变化时，应该怎么去更新视图，从model向view绑定，调用ctrl.$render方法，将viewValue渲染到页面
 * $setValidity方法：设置验证结果
 * $viewValue属性：视图的值
 * $modelValue属性：模型里的值
 */
myApp.directive("even",function(){
    return {
        require:"ngModel",
        link:function(scope,iElement,iAttrs,ngModelController){
            ngModelController.$parsers.push(function(viewValue){
                if(viewValue%2==0){
                    ngModelController.$setValidity("even",true);
                }else{
                    ngModelController.$setValidity("even",false);
                }
                return viewValue;
            })

            ngModelController.$formatters.push(function(modelValue){
                console.log(modelValue);
                return !!modelValue?modelValue+"modelValue返回":"";
                //return modelValue+"faf";
            })
        }
    }
})

/**
 * 自定义指令，自定义文本框
 * ngModelController.$setViewValue：把viewValue保存下来
 * 定义$render方法，每次执行完link执行$render,渲染桌面
 */
myApp.directive("customTextArea",function(){
    return {
        restrict:"E",
        template:"<div contenteditable='true'></div>",
        replace:true,
        require:"ngModel",
        link:function(scope,iElement,iAttrs,ngModelController){
            iElement.on("keyup",function(){
                ngModelController.$setViewValue(iElement.html());
                console.log(ngModelController);
            })

            ngModelController.$render=function(){
                iElement.html(ngModelController.$viewValue);
            }
        }
    }
})