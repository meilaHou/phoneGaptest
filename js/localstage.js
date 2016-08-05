angular.module('storage', [])
//本地存储数据===================================

.factory('locals',['$window',function($window){
    return{        //存储单个属性
        set :function(key,value){
            $window.localStorage[key]=value;
        },        //读取单个属性
        get:function(key,defaultValue){
            return  $window.localStorage[key] || defaultValue;
        },        //存储对象，以JSON格式存储
        setObject:function(key,value){
            $window.localStorage[key]=JSON.stringify(value);
        },        //读取对象
        getObject: function (key) {
            return JSON.parse($window.localStorage[key] || '{}');
        }

    }
}])

    .factory('ls', ['$window', function($window) {
          return {
                 set: function(key, value) {
                   $window.localStorage[key] = value;
                 },
             get: function(key, defaultValue) {
                  return $window.localStorage[key] || defaultValue;
               },
             setObject: function(key, value) {
                   $window.localStorage[key] = JSON.stringify(value);
                },
            getObject: function(key) {
                return JSON.parse($window.localStorage[key] || '{}');
                }
          }
    }])
    //方式一 locals 服务
    .controller('bodycontrollers',function($scope, $ionicPopup, $state,locals){
        "use strict";
//存储数据
        // locals.set("username","1234");
        //  locals.set("password","1231231231");
//读取数据
        // console.log(locals.get("username",""));
    })

    //方式二
    .controller('stackShowControl',function($scope, $ionicPopup, $state,locals){
        "use strict";
//存储数据
        localStorage.setItem("username", "username");
//读取数据
        console.log(locals.get("username",""));
    })

//方式三   ls服务