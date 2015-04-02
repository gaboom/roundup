var app = angular.module('roundup', [
    'ngRoute',
    'ngTouch',
    'controllers',
    'mainService',
    'repower',
    'ngDialog',
    'anim'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'pages/landing.html',
        controller: 'MainCtrl'
    }).when('/campaign', {
        templateUrl: 'pages/campaign.html',
        controller: 'CampaignCtrl'
    }).when('/pif', {
        templateUrl: 'pages/pif.html',
        controller: 'PifCtrl'
    }).when('/pifDone', {
        templateUrl: 'pages/pifDone.html',
        controller: 'PifCtrl'
    }).when('/done', {
        templateUrl: 'pages/done.html',
        controller: 'DoneCtrl'
    }).when('/voucher', {
        templateUrl: 'pages/voucher.html',
        controller: 'HomeCtrl'
    }).when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeCtrl'
    });
});
