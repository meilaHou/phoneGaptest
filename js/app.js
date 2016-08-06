angular.module('ionicApp', ['ionic','storage'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
        //初始化的时候执行
        //     .run(function($ionicPlatform,ls) {
        //         "use strict";
        //         $ionicPlatform.ready(function () {
        //             //init(ls);
        //         })
        //     })
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })

            .state('tabs.about', {
                url: "/about",
                views: {
                    'about-tab': {
                        templateUrl: "templates/about.html"
                    }
                }
            })
            .state('tabs.navstack', {
                url: "/navstack",
                views: {
                    'about-tab': {
                        templateUrl: "templates/nav-stack.html"
                    }
                }
            })
            .state('tabs.stackShow', {
                url: "/stackShow",
                views: {
                    'about-tab': {
                        templateUrl: "templates/nav-stackShow.html"
                    }
                }
            })


        $urlRouterProvider.otherwise("/tab/home");

    })
        //某显示对象控制器,需要将使用到的对象首先注入其中;
    .controller('HomeTabCtrl', function($scope,ls) {
        homeInit(ls);
    })
    .controller('stackShowControl',function($scope){
        $scope.datas = clickdatas;
    })

    .controller('sq_list', function($scope,ls) {
//这里注册的方法,ng-元素属性可以使用;onclick 不可以使用;
        //属性可以任何地方使用;
        $scope.clickdata = function (a){
            clickdatas = ls.getObject(a.task.id);
        };
        var obj = ls.getObject("sq_0");
        var index = 0;
        $scope.tasks = [
        ];
        while (obj["sq_title"]&&obj.sq_title!=""){
            $scope.tasks.push(obj);
            index++;
            obj = ls.getObject("sq_"+index);
            obj.id = "sq_"+index;
            if(obj.sq_ans=="yes")
            {
                obj.class = "button-calm";
            }else
            {
                obj.class = "button-light";
            }
        }

        if(obj["sq_title"]&&obj.sq_title!="")
        {

        }else {
            obj.sq_title = "没有记录";
            $scope.tasks.push(obj);
        }


})
    .controller('shenqingControl', function($scope,ls) {
        var baocunBtn = document.getElementById("baocun2_btn");
        baocunBtn.onclick =function(){baocunShenqing(ls)};

    })
var clickdatas;
var sq_ans;
function serverSideChange(item) {
    "use strict";
    sq_ans = item.getAttribute("ng-value");
};
baocunShenqing = function(ls){
    "use strict";
    var sq_title = document.getElementById("sq_title");
    var sq_jiner = document.getElementById("sq_jiner");
    var sq_date = document.getElementById("sq_date");
    var sq_shuoming = document.getElementById("sq_shuoming");

    var obj = {};
    obj.sq_title = sq_title.value;
    obj.sq_jiner = sq_jiner.value;
    obj.sq_date = sq_date.value;
    obj.sq_shuoming = sq_shuoming.value;
    obj.sq_ans = sq_ans;

    ls.setObject(setNextSqIndex(ls),obj);
    alert("保存成功");

}

function setNextSqIndex(ls){
    "use strict";
    var obj = ls.getObject("sq_0");
    var currentSqIndex = 0;
    while (obj["sq_title"]&&obj.sq_title!=""){
        currentSqIndex++;
        obj = ls.getObject("sq_"+currentSqIndex);

    }
    //最多保存十条,循环保存
    if(currentSqIndex>=10)
    {
        currentSqIndex =  ls.get("currentsqId");//返回"NaN"字符串
        if(currentSqIndex=="NaN"){
            currentSqIndex = 0;
        }
        currentSqIndex++;
        ls.set("currentsqId",currentSqIndex);
    }
    return "sq_"+currentSqIndex;
}
var baocunTest = function (ls){
    ls.setObject("test",{name:"hello",age:"dfsdfsdfs"});
    var obj = ls.getObject("test");
    alert(obj.name);
}
function homeInit(ls)
{
    var baocunBtn = document.getElementById("baocun_btn");

    baocunBtn.onclick =function(){baocunTest(ls)};
}




