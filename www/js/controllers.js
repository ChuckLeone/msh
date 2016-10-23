angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSlideBoxDelegate, $state, $stateParams, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  $scope.state = {
    loggedIn: false
  }

  $scope.$location;

  setUsername();

  function setUsername (){ 
      if ( $scope.state.loggedIn == true ) {
      $scope.userName = $scope.loginData.username;
      console.log("user Ctrl says yes login is " + $scope.state.loggedIn)
    } else {
      $scope.userName = 'please login';
      console.log("user Ctrl says no login is " + $scope.state.loggedIn)
    }
  }
  
  //$scope.requests = {}
  
  //slide controller
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }
  
  // Form data for the login modal
  $scope.loginData = {};
  //$scope.loggedinView = ('templates/user-home.html')

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.profileLink = function(){
    if ($scope.state.loggedIn == false){
      $scope.login();
    } else {
      $scope.logout();
    }
  };

  // log the user out
  $scope.logout = function(username) {
    $scope.state.loggedIn = false;
    //$state.transitionTo('app.loggedOut');
    setUsername(username);
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function(username) {
    if  (($scope.loginData.username == 'demo') && ($scope.loginData.password == '1234')) {
      //$scope.userName = $scope.loginData.username;   
      $scope.state.loggedIn = true;
      setUsername(username);
    } else {
      console.log("error - wrong login brah!" + ' ');
    }
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams, $state) {
})

.controller('HomeCtrl', function($scope){
})

.controller('ProfileCtrl', function($scope, $stateParams, $state){
  $scope.profile = {
    company: 'ACME Construction',
    address1: '1234 Main Street',
    address2: 'Suite 200',
    city: 'Anytown',
    state: 'New York',
    zip: '12345-1234',
    username: 'demo',
    firstName: 'Harrison',
    lastName: 'Ford',
    phone: '(212) 555-5555',
    email: 'hford@acme.com'
  }
})

.controller('TypesCtrl', function($scope, $stateParams, Types){
 $scope.types = Types.all();
})

.controller('TypeCtrl', function($scope, $stateParams, Types, Requests){
  $scope.requests = Requests.all($stateParams.typeId);	
})

.controller('RequestsCtrl', function($scope, Requests){
  $scope.requests = Requests.all();	
})

.controller('RequestCtrl', function($scope, Requests) {
   $scope.requests = Requests.all();	
})

.controller('RequestDetailsCtrl', function($scope, $stateParams, Requests) {
  $scope.request = Requests.get($stateParams.requestId);
        console.log($scope.request);
   
});