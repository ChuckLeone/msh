// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ngStorage'])

.run(function($ionicPlatform, Requests) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html',
                controller: 'TypesCtrl'
            }
        }
    })

    .state('app.type', {
        url: '/types/:typeId',
        views: {
            'menuContent': {
                templateUrl: 'templates/type.html',
                controller: 'TypeCtrl'
            }
        }
    })

    .state('app.request', {
        url: '/requests',
        views: {
            'menuContent': {
                templateUrl: 'templates/request.html',
                controller: 'RequestCtrl'
            }
        }
    })

    .state('app.request-details', {
        url: '/requests/:requestId',
        views: {
            'menuContent': {
                templateUrl: 'templates/request.html',
                controller: 'RequestDetailsCtrl'
            }
        }
    })

    .state('app.create-proposal', {
        url: '/create-proposal',
        views: {
            'menuContent': {
                templateUrl: 'templates/create-proposal.html',
                controller: 'NewProposalCtrl'
            }
        }
    })

    .state('app.review-proposal', {
        url: '/proposals/:proposalId',
        views: {
            'menuContent': {
                templateUrl: 'templates/review-proposal.html',
                controller: 'ProposalDetailsCtrl'
            }
        }
    })

    .state('app.add-vendors', {
        url: '/proposals/:proposalId',
        views: {
            'menuContent': {
                templateUrl: 'templates/add-vendors.html',
                controller: 'ProposalDetailsCtrl'
            }
        }
    })

    .state('app.select-vendors', {
        url: '/proposals/:proposalId/vendors',
        views: {
            'menuContent': {
                templateUrl: 'templates/review-vendors.html',
                controller: 'ProposalDetailsCtrl'
            }
        }
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'
            },
            'header': {
                templateUrl: 'templates/header.html'
            }
        }
    })

    .state('app.myrofile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })

    .state('app.createProfile', {
        url: '/create-profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/create-profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })

    .state('app.loggedOut', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('app.loggedIn', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html'
            }
        }
    })

    .state('app.playlists', {
        url: '/playlists',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlists.html',
                controller: 'PlaylistsCtrl'
            }
        }
    })

    .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});