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

.controller('HomeCtrl', function($scope){
})

.controller('ProposalCtrl', function($scope, $state){
  $scope.proposal = {
    title: '',
    description: '',
    dueDate: '',
    poNumber: '',
    items: []
  };

  $scope.items = [];

  $scope.getTotalItems = function () {
    return $scope.items.length;
  };

  $scope.addItem = function () {
    var proposalItemTemplate = { url: '../templates/proposal-item.html'};
     var newRow = angular.element( document.querySelector( '#items' ) );
     $scope.template = proposalItemTemplate;
     newRow.append($scope.template);
  };

  $scope.saveProposal = function () {
    $scope.proposal = {
      title: $scope.proposal.title,
      description: $scope.proposal.description,
      duteDate: $scope.proposal.dueDate,
      poNumber: $scope.proposal.poNumber,
      items: $scope.proposal.items
    }
    console.log("proposal saved");
  };

  $scope.saveItem = function () {
    $scope.items.push({
      materialType: $scope.proposal.item.materialType, 
      process: $scope.proposal.item.process, 
      specifications: $scope.proposal.item.specifications,
      quantity: $scope.proposal.item.quantity,
      unitPrice: $scope.proposal.item.unitPrice
    });
    $scope.proposal.item.materialType = '';
  };

  $scope.createProposal = function() {
    $scope.saveProposal();
    // $scope.saveItem();
    console.log("form submitted");
    $state.transitionTo('app.reviewProposal');
  };
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