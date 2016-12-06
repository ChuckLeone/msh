angular.module('starter.services', ['ngStorage'])

.factory('Types', function() {
   var types = [
    { title: 'Steel', id: 0 },
    { title: 'Aluminum',  id: 1 },
    { title: 'Iron', id: 2 },
    { title: 'Brass', id: 3 },
    { title: 'Copper', id: 4 },
    { title: 'Lead', id: 5 }
  ];
  return {
    all: function() {
      return types;
    },
    get: function(typeId) {
      for (var i = 0; i < types.length; i++) {
        if (types[i].id === parseInt(typeId)) {
          return types[i];
        }
      }
      return null;
    }
  };
})

.factory('Vendors', function() {
  // Some fake testing data
  var vendors = [
    {
    id: 0,
    type:'steel',
    company: 'Broadway Steel',
    contact: 'Dave Smith',
    status: 'unavailable',
    materialType: 'steel',
    processType: 'plate',
    summary: 'lorem ipsum sed ante phasellus in massa ',
    face: 'img/logo.jpg',
    include: true
  }, {
    id: 1,
    type:'alunimum',
    company: 'Metal Suppliers of America',
    contact: 'Charles Xavier',
    status: 'available',
    materialType: 'steel aluminium iron',
    processType: 'plate',
    summary: 'lorem ipsum sed ante phasellus in massa ',
    face: 'img/logo.jpg',
    include: true
  }, {
    id: 2,
    type:'iron',
    company: 'Stark Industries',
    contact: 'Anthony Stark',
    status: 'available',
    materialType: 'steel copper',
    processType: 'plate',
    summary: 'lorem ipsum sed ante phasellus in massa ',
    face: 'img/logo.jpg',
    include: true
  }, {
    id: 3,
    type:'copper',
    company: 'Copper Inc.',
    contact: 'Patricia Fendler',
    status: 'unavailable',
    materialType: 'copper',
    processType: 'plate',
    summary: 'lorem ipsum sed ante phasellus in massa ',
    face: 'img/logo.jpg',
    include: true
  }];

  return {
    all: function() {
      return vendors;
    },
    remove: function(vendor) {
      vendors.splice(vendors.indexOf(vendor), 1);
    },
    get: function(vendorId) {
      for (var i = 0; i < vendors.length; i++) {
        if (vendors[i].id === parseInt(vendorId)) {
          return vendors[i];
        }
      }
      return null;
    }
  };
})

.factory('Requests', function() {
  // Some fake testing data
  var requests = [
    {
    id: 0,
    type:'steel',
    title: 'I need a ton of steel',
    company: 'Tesla Motors',
    contact: 'Elon Musk',
    amount: '5000 tons',
    status: 'pending',
    summary: 'lorem ipsum sed ante phasellus in massa ',
    face: 'img/elon.jpg'
  }, {
    id: 1,
    type:'aluminum',
    title: 'got aluminum?',
    company: 'Springfield Power Plant',
    contact: 'Homer Simpson',
    amount: '400 tons',
    status: 'approved',
    summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.',
    face: 'img/homer.jpg'
  }, {
    id: 2,
    type:'steel',
    title: 'Request for steel',
    company: 'ACME Company',
    contact: 'Wile E Coyote',
    amount: '200  lbs',
    status: 'pending',
    summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.',
    face: 'img/wile.jpg'
  }, {
    id: 3,
    type:'iron',
    title: 'in the market for iron',
    company: 'ACME Company',
    contact: 'Wile E Coyote',
    amount: '200  lbs',
    status: 'approved',
    summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.',
    face: 'img/steve.jpg'
  }, {
    id: 4,
    type:'aluminumn',
    title: 'Request for aluminium',
    company: 'ACME Company',
    contact: 'Wile E Coyote',
    amount: '200  lbs',
    status: 'pending',
    summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.',
    face: 'img/carmack.jpg'
  }, {
    id: 5,
    type:'copper',
    title: 'Buying copper',
    company: 'ACME Company',
    contact: 'Wile E Coyote',
    amount: '200  lbs',
    status: 'pending',
    summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.',
    face: 'img/alex.jpg'
  }];

  return {
    all: function() {
      return requests;
    },
    remove: function(request) {
      requests.splice(requests.indexOf(request), 1);
    },
    get: function(requestId) {
      for (var i = 0; i < requests.length; i++) {
        if (requests[i].id === parseInt(requestId)) {
          return requests[i];
        }
      }
      return null;
    }
  };
})

.factory('Proposals', function($localStorage){

 var $storage = $localStorage.$default({
   proposals:[]
 });
  
 var proposals=$storage.proposals;

  return {
    all: function() {
      return proposals;
    },
    remove: function(proposal) {
      proposals.splice(proposals.indexOf(proposal), 1);
    },
    add: function(proposal) {
      console.log(proposal);
      proposals.push({
        id: proposal.id,
        title: proposal.title,
        description: proposal.description,
        dueDate: proposal.dueDate,
        poNumber: proposal.poNumber,
        contact: proposal.contact,
        face: 'img/harrison.jpg',
        items: proposal.items,
        vendors: proposal.vendors,
        status: proposal.status
      })
    },
    get: function(proposalId) {
      for (var i = 0; i < proposals.length; i++) {
        if (proposals[i].id === parseInt(proposalId)) {
          return proposals[i];
        }
      }
      return null;
    },
    post: function () {
      $localStorage = proposals;
      },
    clear: function () {
      $localStorage.clear();
      console.log("local storage cleared!");
    }
  };
  
})

.factory('Items', function(){

  var items=[];

  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
      console.log("proposal deleted" + items)
    },
    add: function(items) {
        console.log(items);
        items.push({
        id: item.id,
        materialType: $scope.proposal.item.materialType, 
        process: $scope.proposal.item.process, 
        specifications: $scope.proposal.item.specifications,
        description: $scope.proposal.item.description,
        weight: $scope.proposal.item.weight,
        wwidth: $scope.proposal.item.width,
        length: $scope.proposal.item.length,
        quantity: $scope.proposal.item.quantity,
        unitPrice: $scope.proposal.item.unitPrice,
        note: $scope.proposal.items.item.note
      })
      console.log("item added" +items)
    },
    get: function(itemlId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    },
    post: function () {
      Items = items;
      }
  };
  
});