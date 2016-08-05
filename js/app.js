angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
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

    .controller('HomeTabCtrl', function($scope) {
        console.log('HomeTabCtrl');
    });
