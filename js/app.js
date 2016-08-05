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
    .controller('sq_list', function($scope,ls) {
        var obj = ls.getObject("sq_0");
        if(obj["sq_title"]&&obj.sq_title!="")
        {

        }else {
            obj.sq_title = "没有记录";
        }
    $scope.tasks = [
        obj
    ];
})
    .controller('shenqingControl', function($scope,ls) {
        var baocunBtn = document.getElementById("baocun2_btn");
        baocunBtn.onclick =function(){baocunTest(ls)};
    });


var baocunShenqing = function(ls){
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

    ls.setObject("sq_0",obj);

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




