angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSlideBoxDelegate, $state, $stateParams, $location, Proposals) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  $scope.state = {
    loggedIn: false,
    userName: 'Please login',
    admin: false
  }

  $scope.$location;

  // setUsername();

  function setUsername (username){ 
    if ( $scope.state.loggedIn == true ) {
      $scope.userName = $scope.loginData.username;
      console.log("user Ctrl says yes login is " + $scope.state.loggedIn); 
      console.log('username is ' + $scope.state.userName);
      return $scope.state.userName;
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
      $scope.state.admin = true;
      $scope.state.userName = $scope.loginData.username,
      setUsername(username);
      //setProfile(username);
    } 
    else if  (($scope.loginData.username == 'demo2') && ($scope.loginData.password == '1234')) {
      //$scope.userName = $scope.loginData.username;   
      $scope.state.loggedIn = true;
      $scope.state.userName = $scope.loginData.username,
      setUsername(username);
      //$scope.setProfile(username);
    } else {
      alert("Incorrect Username or Password.");
    }
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

})

.controller('HomeCtrl', function($scope, $state, $filter, Proposals, Requests, Vendors){
   $scope.proposals = Proposals.all($scope.proposals);
   $scope.requests = Requests.all($scope.requests); 
   $scope.pendingRequests = $scope.requests;
   $scope.pending = $filter('filter')($scope.requests, {status : 'approved'})[0];
   $scope.clear = Proposals.clear();

   $ionicModal.fromTemplateUrl('templates/profile-add-capability.html', {
    scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

})

.controller('ProposalCtrl', function($scope, $state, Proposals){
  $scope.proposals = Proposals.all();
})

.controller('NewProposalCtrl', function($scope, $state, $ionicModal, Proposals, Items, Vendors){
  function setId() {
			var ids = Proposals.all();
			return id = ids.length + 1;
		}
  $scope.proposal = {
      id: setId(),
      title: '',
      description: '',
      dueDate: '',
      poNumber: '',
      face:  '',
      items: [],
      vendors: [],
      status: ''
  }

  $scope.proposals = Proposals.all(); 
  $scope.newProposal = function () {
    $scope.proposal = {
      id: '',
      title: '',
      description: '',
      dueDate: '',
      poNumber: '',
      contact: '',
      face: '',
      items: $scope.items,
      vendors: $scope.vendors,
      status: ''
    };
  }

  $scope.proposal.items = [];
  $scope.proposal.vendors = [];

  $scope.getTotalItems = function () {
    return $scope.items.length;
  };

  // modal for add item
  $ionicModal.fromTemplateUrl('templates/proposal-add-item.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


  $scope.addItem = function() {
    function setId() {
			var ids = Items.all();
			return id = ids.length + 1;
		}
    $scope.modal.show();
    $scope.proposal.items.item = {
      id: setId(),
    }
  }

  $scope.reviewProposal = function (proposal) {
    Proposals.add($scope.proposal);
    Proposals.post(); 
    $localStorage = Proposals.all(proposal);
    $state.transitionTo('app.reviewProposal');
    console.log(proposal);
  };

  $scope.saveProposal = function(proposal) {
		Proposals.add($scope.proposal);
		Proposals.post();
		$localStorage = Proposals.all(proposal);
	};

  $scope.saveItem = function (proposal) {
    $scope.proposal.items.push({
      id: $scope.proposal.items.item.id,
      materialType: $scope.proposal.items.item.materialType, 
      process: $scope.proposal.items.item.process, 
      specifications: $scope.proposal.items.item.specifications,
      description: $scope.proposal.items.item.description,
      weight: $scope.proposal.items.item.weight,
      length: $scope.proposal.items.item.length,
      width: $scope.proposal.items.item.width,
      quantity: $scope.proposal.items.item.quantity,
      unitPrice: $scope.proposal.items.item.unitPrice,
      note: $scope.proposal.items.item.note
    });
    
    $scope.modal.hide();
  };

  $scope.createProposal = function() {
    $scope.proposal = {
      id: $scope.proposal.id,
      title: $scope.proposal.title,
      description: $scope.proposal.description,
      dueDate: $scope.proposal.dueDate,
      poNumber: $scope.proposal.poNumber,
      contact: 'Harrison',
      face: 'img/harrison.jpg',
      items: $scope.proposal.items,
      vendors: $scope.proposal.vendors,
      status: 'pending'
    };
    $scope.proposal = this.proposal;
    $scope.saveProposal();
    return this.proposal;
  };
})

.controller('ProfileCtrl', function($scope, $stateParams, $state){
  console.log('username is ' + $scope.state.userName);

  // if ($scope.username == 'demo') {
    $scope.profile = {
      company: 'ACME Construction',
      address1: '1234 Main Street',
      address2: 'Suite 200',
      city: 'Anytown',
      state: 'New York',
      zip: '12345-1234',
      country: 'USA',
      username: 'demo',
      firstName: 'Harrison',
      lastName: 'Ford',
      phone: '(212) 555-5555',
      email: 'hford@acme.com',
      face: 'img/harrison.jpg',
      logo: 'img/logo-acme.png',
      type: 'manufacturer',
      drafts: 5,
      submitted: 7,
      accepted: 3,
      quoting: 12,
      awarded: 4,
      closed: 2
    };
  // } else  {
  //    $scope.profile = {
  //     company: 'Full Metal Steel',
  //     address1: '66 Route 5',
  //     address2: '',
  //     city: 'Anytown',
  //     state: 'Maine',
  //     zip: '12345-1234',
  //     country: 'USA',
  //     username: 'demo2',
  //     firstName: 'Charles',
  //     lastName: 'Xavier',
  //     phone: '(212) 555-5555',
  //     email: 'cxavier@fullmetal.com',
  //     face: 'img/xavier.jpg',
  //     logo: 'img/logo-fullmetal.png',
  //     type: 'supplier',
  //     drafts: 5,
  //     submitted: 7,
  //     accepted: 3,
  //     quoting: 12,
  //     awarded: 4,
  //     closed: 2
  //   };
  // }

  $scope.capabilities = [
      { title: 'welding', icon: 'img/temp.png'},
      { title: 'cutting tools', icon: 'img/temp.png'},
      { title: 'fabrication', icon: 'img/temp.png'},
      { title: 'bending', icon: 'img/temp.png'},
      { title: 'drafting', icon: 'img/temp.png'},
      { title: 'drawing', icon: 'img/temp.png'},
      { title: 'structural fabrication', icon: 'img/temp.png'},
      { title: 'lay-up', icon: 'img/temp.png'}
    ];

  $scope.feed = [
     { title: 'You created a project My Project.'},
     { title: 'Your add a new project Test Project to campaign My Campaign.'}
   ];
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

.controller('ProposalsCtrl', function($scope, Proposals){
  $scope.proposals = Proposals.all();	
})

.controller('ProposalVendorsCtrl', function($scope, $stateParams, $state, Proposals, Items, Vendors){
  $scope.proposals = Proposals.all();	
  $scope.proposal = Proposals.get($stateParams.proposalId);
  
  $scope.items = $scope.proposal.items;
  $scope.vendors = Vendors.all();
  $scope.vendors.checked = [];
  $scope.vendor = this.vendor;

  $scope.filteredMaterials = $scope.items.map(function(a) {return a.materialType;});
  $scope.filteredProcess = $scope.items.map(function(b) {return b.processType;});
  $scope.containsComparator = function(expected, actual){  
    return actual.indexOf(expected) > -1;
  };

 $scope.vendorChecked = function (id) {
    console.log("vendor added " + id);
    $scope.vendors.checked.push(id); 
 }

  $scope.submitProposal = function(proposal) {
    Proposals.update($scope.proposal);
    // Proposals.post();
    $state.transitionTo('app.home');

    $scope.proposal.vendors = $scope.vendors;
  }
})

.controller('RequestCtrl', function($scope, Requests) {
   $scope.requests = Requests.all();	
})

.controller('RequestDetailsCtrl', function($scope, $stateParams, Requests) {
  $scope.request = Requests.get($stateParams.requestId);
})

.controller('ProposalDetailsCtrl', function($scope, $stateParams, $state, Proposals, Items, Vendors){
  $scope.proposal = Proposals.get($stateParams.proposalId);
  $scope.remove = function(proposal) {
    Proposals.remove(proposal);
    $state.transitionTo('app.home');
  }
 $scope.selectVendors = function() {
    $state.transitionTo('app.select-vendors');
  }
});