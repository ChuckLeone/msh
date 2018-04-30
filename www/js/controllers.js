angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSlideBoxDelegate, $ionicPopup, $filter, $state, $stateParams, $location, Proposals) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});


    $scope.state = {
        loggedIn: false,
        userName: 'Please Login',
        admin: false,
        notification: 0,
        text: ''
    }

    $scope.setNotification = function(state) {
        switch (state) {
            case 1:
                $scope.state.notification = 1;
                $scope.state.text = "Your proposal has ben submitted.";
                break;

            case 2:
                $scope.state.notification = 1;
                $scope.state.text = "Your proposal has ben cancelled.";
                break;

            default:
                $scope.state.notification = 0;
                break;
        };
    }

    $scope.userName = 'Please Login';
    $scope.$location;

    $scope.todaysDate = new Date();


    function setUsername(username) {
        if ($scope.state.loggedIn == true) {
            $scope.userName = $scope.loginData.username;
            console.log("user Ctrl says yes login is " + $scope.state.loggedIn);
            return $scope.state.userName;
        } else {
            $scope.userName = 'please login';
            console.log("user Ctrl says no login is " + $scope.state.loggedIn)
        }
    }

    // check for vendor or manufacture
    function setManufacture() {
        $scope.userName = $scope.loginData.username;

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
        }

        $scope.capabilities = [
            { title: 'cutting tools', icon: 'img/temp.png' },
            { title: 'drafting', icon: 'img/temp.png' },
            { title: 'drawing', icon: 'img/temp.png' },
            { title: 'structural fabrication', icon: 'img/temp.png' },
            { title: 'lay-up', icon: 'img/temp.png' }
        ];

        $scope.feed = [
            { title: 'You created a project My Project.' },
            { title: 'Your add a new project Test Project to campaign My Campaign.' }
        ];

    };

    function setVendor() {
        $scope.userName = $scope.loginData.username;

        $scope.profile = {
            company: 'Full Metal Steel',
            address1: '66 Route 5',
            address2: '',
            city: 'Anytown',
            state: 'Maine',
            zip: '12345-1234',
            country: 'USA',
            username: 'demo2',
            firstName: 'Charles',
            lastName: 'Xavier',
            phone: '(212) 555-5555',
            email: 'cxavier@fullmetal.com',
            face: 'img/xavier.jpg',
            logo: 'img/logo-fullmetal.png',
            type: 'supplier',
            drafts: 5,
            submitted: 7,
            accepted: 3,
            quoting: 12,
            awarded: 4,
            closed: 2
        }

        $scope.capabilities = [
            { title: 'bending', icon: 'img/temp.png' },
            { title: 'cutting tools', icon: 'img/temp.png' },
            { title: 'fabrication', icon: 'img/temp.png' },
            { title: 'welding', icon: 'img/temp.png' },
        ];

        $scope.feed = [
            { title: 'You created yoour profile.' },
            { title: 'Your submitted a request for services.' }
        ];
    };
    //

    function setAdmin() {
        $scope.userName = $scope.loginData.username;

        $scope.profile = {
            company: 'Material Supply Hub',
            address1: '100 Main Street',
            address2: '',
            city: 'Anytown',
            state: 'Maine',
            zip: '12345-1234',
            country: 'USA',
            username: 'demo3',
            firstName: 'Steve',
            lastName: 'Jobs',
            phone: '(212) 555-5555',
            email: 'cxavier@fullmetal.com',
            face: 'img/steve.jpg',
            logo: 'img/logo-fullmetal.png',
            type: 'supplier'
        }
    };

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

    $scope.profileLink = function() {
        if ($scope.state.loggedIn == false) {
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
        if (($scope.loginData.username == 'demo') && ($scope.loginData.password == '1234')) {
            $scope.state.loggedIn = true;
            $scope.state.admin = false;
            $scope.state.userName = $scope.loginData.username,
                setManufacture();
        } else if (($scope.loginData.username == 'demo2') && ($scope.loginData.password == '1234')) {
            //$scope.userName = $scope.loginData.username;   
            $scope.state.loggedIn = true;
            $scope.state.admin = false;
            $scope.state.userName = $scope.loginData.username,
                setUsername(username);
            setVendor();
        } else if (($scope.loginData.username == 'admin') && ($scope.loginData.password == '1234')) {
            //$scope.userName = $scope.loginData.username;   
            $scope.state.loggedIn = true;
            $scope.state.admin = true;
            $scope.state.userName = $scope.loginData.username,
                setUsername(username);
            setAdmin();
        } else {
            alert("Incorrect Username or Password.");
        }
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };

})

.controller('HomeCtrl', function($scope, $state, $filter, $ionicPopup, Proposals, Requests, Vendors) {

    $scope.proposals = Proposals.all($scope.proposals);
    $scope.requests = Requests.all($scope.requests);
    $scope.pendingRequests = $scope.requests;
    $scope.pending = $filter('filter')($scope.requests, { status: 'approved' })[0];
    $scope.clear = Proposals.clear();

    $ionicModal.fromTemplateUrl('templates/profile-add-capability.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.state.notification(1);
    console.log($scope.state.notification);
})

.controller('ProposalCtrl', function($scope, $state, Proposals) {
    $scope.proposals = Proposals.all();
})

.controller('NewProposalCtrl', function($scope, $state, $ionicModal, Proposals, Items, Vendors, Materials) {
    $scope.state = {
        step: 1
    }

    $scope.setState = function(val) {
        if (val === 2) {
            console.log("state is " + val);
            return $scope.state.step = 2;
        }
        if (val === 3) {
            console.log("state is " + val);
            return $scope.state.step = 3;
        } else {
            return $scope.state.step = 1;
        }
    }

    function setId() {
        var ids = Proposals.all();
        return id = ids.length + 1;
    }

    $scope.clearForm = function() {
        setId();
        newProposal();
        $state.transitionTo("app.create-proposal");
        return $scope.setState = 1;
    }

    $location = "href=#/app/create-proposal";

    $scope.proposal = {
        id: setId(),
        title: '',
        description: '',
        dueDate: '',
        poNumber: '',
        face: '',
        items: [],
        vendors: [],
        status: ''
    }

    $scope.proposals = Proposals.all();

    function newProposal() {
        proposal = {
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

    $scope.getTotalItems = function() {
        return $scope.items.length;
    };
    $scope.closeAddItem = function() {
            $scope.modal.hide();
        }
        // modal for add item
    $ionicModal.fromTemplateUrl('templates/proposal-add-item.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });


    $scope.addItem = function() {
        function setItemId() {
            var ids = Items.all();
            return id = ids.length + 1;
        }
        $scope.modal.show();
        $scope.proposal.items.item = {
            id: setItemId(),
        }
    };

    $scope.changeValue = function(materialSelected, partTypeSelected) {

        var partTypeSelected = $scope.proposal.items.item.partType
        var materialSelected = $scope.proposal.items.item.materialType
        switch (materialSelected) {
            case 'angle':
                $scope.proposal.items.item.unitPrice = 200.70;
                break;

            case 'beam':
                $scope.proposal.items.item.unitPrice = 122.50;
                break;

            case 'channel':
                $scope.proposal.items.item.unitPrice = 45.50;
                break;

            case 'flatbar':
                $scope.proposal.items.item.unitPrice = 44.50;
                break;

            case 'grating':
                $scope.proposal.items.item.unitPrice = 23.50;
                break;

            case 'pipe':
                $scope.proposal.items.item.unitPrice = 55.50;
                break;

            case 'plate':
                $scope.proposal.items.item.unitPrice = 82.50;
                break;

            case 'roundbar':
                $scope.proposal.items.item.unitPrice = 100.50;
                break;

            case 'tee':
                $scope.proposal.items.item.unitPrice = 34.50;
                break;

            case 'tube-rectanglge':
                $scope.proposal.items.item.unitPrice = 162.50;
                break;

            case 'tube-square':
                $scope.proposal.items.item.unitPrice = 22.50;
                break;

            case 'other':
                $scope.proposal.items.item.unitPrice = 122.50;
                break;

            default:
                $scope.proposal.items.item.unitPrice = 0.00;
                break;
        };
        switch (partTypeSelected) {
            case 'bushing':
                $scope.proposal.items.item.additionalInfo = '316SS';
                $scope.proposal.items.item.unitPrice = 12.70;
                break;

            case 'clamps':
                $scope.proposal.items.item.additionalInfo = '304SS - JENSEN JC13HD OR EQUAL';
                $scope.proposal.items.item.unitPrice = 200.00;
                break;

            case 'concentric-reducers':
                $scope.proposal.items.item.additionalInfo = '316SS';
                $scope.proposal.items.item.unitPrice = 12.30;
                break;

            case 'couplings':
                $scope.proposal.items.item.additionalInfo = 'SFT5405';
                $scope.proposal.items.item.unitPrice = 20.10;
                break;

            case 'elbows':
                $scope.proposal.items.item.additionalInfo = '316SS';
                $scope.proposal.items.item.unitPrice = 323.11;
                break;

            case 'fasteners':
                $scope.proposal.items.item.additionalInfo = 'ASTM A194 Grade 8A (304 Stainless Steel)';
                $scope.proposal.items.item.unitPrice = 33.99;
                break;

            case 'flange':
                $scope.proposal.items.item.additionalInfo = 'ANSI B16.5, ASTM B247 Grade 6061-T6 Aluminum';
                $scope.proposal.items.item.unitPrice = 3.23;
                break;

            case 'reducer':
                $scope.proposal.items.item.additionalInfo = 'CONCAVE - BW - SMLS';
                $scope.proposal.items.item.unitPrice = 7.23;
                break;

            case 'sockolet':
                $scope.proposal.items.item.additionalInfo = 'ANSI B16.9, ASME SB-247 - 6061-T6 ALUMINUM';
                $scope.proposal.items.item.unitPrice = 52.23;
                break;

            case 'stub-end':
                $scope.proposal.items.item.additionalInfo = 'ASME B16.9, ASTM B 361 - WP6061-T6 ALUMINUM';
                $scope.proposal.items.item.unitPrice = 41.20;
                break;

            case 'tees':
                $scope.proposal.items.item.additionalInfo = '316SS - JENSEN J7WR OR EQUAL';
                $scope.proposal.items.item.unitPrice = 32.11;
                break;

            case 'threadolet':
                $scope.proposal.items.item.additionalInfo = 'A105';
                $scope.proposal.items.item.unitPrice = 45.89;
                break;

            default:
                $scope.proposal.items.item.additionalInfo = 'please select a part'
                $scope.proposal.items.item.unitPrice = 0.00;
                break;
        }
    };

    $scope.calculateWeight = function() {
        $scope.proposal.items.item.weight = ($scope.proposal.items.item.width) + ($scope.proposal.items.item.length) * 10;
        console.log("runing the calc function" + $scope.proposal.items.item.weight);
        return $scope.proposal.items.item.weight;

    }

    $scope.addVendors = function(proposal) {
        Proposals.add($scope.proposal);
        Proposals.post();
        $localStorage = Proposals.all(proposal);
        $state.transitionTo('app.add-vendor');
    };

    $scope.reviewProposal = function(proposal) {
        Proposals.add($scope.proposal);
        Proposals.post();
        $localStorage = Proposals.all(proposal);
        $state.transitionTo('app.review-proposal');
    };

    $scope.saveProposal = function(proposal, newProposal) {
        Proposals.add($scope.proposal);
        Proposals.post();
        $localStorage = Proposals.all(proposal);
        $scope.setNotification(1);
    };

    $scope.saveItem = function(proposal) {
        $scope.proposal.items.push({
            id: $scope.proposal.items.item.id,
            type: $scope.proposal.items.item.type,
            materialType: $scope.proposal.items.item.materialType,
            partType: $scope.proposal.items.item.partType,
            partMake: $scope.proposal.items.item.partMake,
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

    // $scope.createProposal = function() {
    //     $scope.proposal = {
    //         id: $scope.proposal.id,
    //         title: $scope.proposal.title,
    //         description: $scope.proposal.description,
    //         dueDate: $scope.proposal.dueDate,
    //         poNumber: $scope.proposal.poNumber,
    //         contact: 'Harrison',
    //         face: 'img/harrison.jpg',
    //         items: $scope.proposal.items,
    //         vendors: $scope.proposal.vendors,
    //         status: 'pending'
    //     };
    //     $scope.proposal = this.proposal;
    //     $scope.saveProposal();
    //     return this.proposal;
    // };

    $scope.vendors = Vendors.all();
    $scope.vendors.checked = [];
    $scope.vendor = this.vendor;

    $scope.vendorChecked = function(id) {
        console.log("vendor added " + id);
        $scope.vendors.checked.push(id);
        $scope.proposal.vendors = $scope.vendors.checked;
    }

    $scope.submitProposal = function(proposal) {
        Proposals.update($scope.proposal);
        // Proposals.post();
        $state.transitionTo('app.home');
    }
})

.controller('ProfileCtrl', function($scope, $stateParams, $ionicPopup, $state) {
    $scope.username = $scope.state.userName;

    // pop up
    $scope.showPopup = function() {
        $scope.data = {}

        // Custom popup
        var myPopup = $ionicPopup.show({
            template: '<input type = "text" ng-model = "data.model">',
            title: 'Title',
            subTitle: 'Subtitle',
            scope: $scope,

            buttons: [
                { text: 'Cancel' }, {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function(e) {

                        if (!$scope.data.model) {
                            //don't allow the user to close unless he enters model...
                            e.preventDefault();
                        } else {
                            return $scope.data.model;
                        }
                    }
                }
            ]
        });

        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        // popup
        var launchPopup;
        (launchPopup = function() {
            console.log("test");
        })();
    };
})

.controller('TypesCtrl', function($scope, $stateParams, Types) {
    $scope.types = Types.all();
})

.controller('TypeCtrl', function($scope, $stateParams, Types, Requests) {
    $scope.requests = Requests.all($stateParams.typeId);
})

.controller('RequestsCtrl', function($scope, Requests) {
    $scope.requests = Requests.all();
})

.controller('ProposalsCtrl', function($scope, Proposals) {
    $scope.proposals = Proposals.all();
})

.controller('ProposalVendorsCtrl', function($scope, $stateParams, $state, Proposals, Items, Vendors) {
    $scope.proposals = Proposals.all();
    $scope.proposal = Proposals.get($stateParams.proposalId);

    console.log($scope.proposal);

    $scope.items = proposal.items;
    $scope.vendors = Vendors.all();
    $scope.vendors.checked = [];
    $scope.vendor = this.vendor;

    $scope.filteredMaterials = $scope.items.map(function(a) { return a.materialType; });
    $scope.filteredProcess = $scope.items.map(function(b) { return b.processType; });
    $scope.containsComparator = function(expected, actual) {
        return actual.indexOf(expected) > -1;
    };

    $scope.vendorChecked = function(id) {
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

.controller('ProposalDetailsCtrl', function($scope, $stateParams, $filter, $state, $ionicModal, Proposals, Items, Vendors) {
    $scope.proposal = Proposals.get($stateParams.proposalId);
    $scope.vendors = Vendors.all();
    $scope.vendors.checked = [];
    $scope.vendor = this.vendor;

    $scope.remove = function(proposal) {
        Proposals.remove(proposal);
        $state.transitionTo('app.home');
        $scope.setNotification(2);
    }

    $ionicModal.fromTemplateUrl('templates/proposal-add-new-vendor.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    })

    $scope.closeAddVendor = function() {
        console.log("close");
        $scope.modal.hide();
    }

    $scope.addNewVendor = function() {
        console.log("vendor");

        function setId() {
            var ids = Vendors.all();
            return id = ids.length + 1;
        }
        $scope.modal.show();
        $scope.proposal.vendors.vendor = {
            id: setId(),
        }
    }

    $scope.saveNewVendor = function(proposal) {
        console.log("save vendor");
        $scope.proposal.vendors.push({
            id: $scope.proposal.vendors.vendor.id,
            contact: $scope.proposal.vendors.vendor.contact,
            company: $scope.proposal.vendors.vendor.company,
            email: $scope.proposal.vendors.vendor.email,
            location: $scope.proposal.vendors.vendor.location,
        });

        $scope.modal.hide();
    };

    $scope.selectVendors = function() {
        var proposal = Proposals.get($stateParams.proposalId);
        $scope.items = proposal.items;

        // $scope.filteredMaterials = $scope.items.map(function(a) { console.log('boo'); return a.materialType; });
        // $scope.filteredProcess = $scope.items.map(function(b) { return b.processType; });
        // $scope.containsComparator = function(expected, actual) {
        //     return actual.indexOf(expected) > -1;
        // };

        $state.transitionTo('app.select-vendors');
    }

    $scope.vendorChecked = function(id) {
        console.log("vendor added " + id);
        $scope.vendors.checked.push(id);
    }

    $scope.submitProposal = function(proposal) {
        $scope.proposal.vendors = $scope.vendors.checked;
        Proposals.update($scope.proposal);
        // Proposals.post();
        $state.transitionTo('app.home');
    }

    $scope.getTotalItems = function() {
        return $scope.items.length;
    };

    $scope.calculateWeight = function() {
        $scope.proposal.items.item.weight = ($scope.proposal.items.item.width) + ($scope.proposal.items.item.length) * 10;
        console.log("runing the calc function" + $scope.proposal.items.item.weight);
        return $scope.proposal.items.item.weight;

    }

    $scope.closeAddItem = function() {
            $scope.modal.hide();
        }
        // modal for add item
    $ionicModal.fromTemplateUrl('templates/proposal-add-item.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.step1 = '';

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

    $scope.saveItem = function(proposal) {
        $scope.proposal.items.push({
            id: $scope.proposal.items.item.id,
            type: $scope.proposal.items.item.type,
            materialType: $scope.proposal.items.item.materialType,
            partType: $scope.proposal.items.item.partType,
            partMake: $scope.proposal.items.item.partMake,
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
})

.controller('FilterCtrl', function($scope, $stateParams, Filters) {
    $scope.filters = Filters.all();
})

.controller('MarketplaceCtrl', function($scope, $stateParams, Materials) {
    $scope.materials = Materials.all();
})

.controller('MaterialsDatabaseCtrl', function($scope, $stateParams, MaterialsDatabase) {
    $scope.materials = MaterialsDatabase.all();
});