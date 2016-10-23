angular.module('starter.services', ['ngStorage'])

//.factory('Requests', function($localStorage){

//  var $storage = $localStorage.$default({
//    requests:[
//        { type: 'Steel', id: 0}
//    ]
//  });
 
//  var requests=$storage.requests;
  
//   return {
//     all: function() {
//       return requests;
//     },
//     add: function(request) {
//       requests.push({
//         id: request.id,
//         title: request.title,
//         type: request.type
//       })
//     },
//     get: function(requestId) {
//       for (var i = 0; i < requests.length; i++) {
//         if (requests[i].id === parseInt(requestId)) {
//           return requests[i];
//         }
//       }
//       return null;
//     },

//     post: function () {
//       $localStorage = requests;
//       }
//   };

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

.factory('Requests', function($localStorage) {
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
    summary: 'lorem ipsum sed ante phasellus in massa '
  }, {
    id: 1,
    type:'aluminum',
    title: 'got aluminum?',
    company: 'Springfield Power Plant',
    contact: 'Homer Simpson',
    amount: '400 tons',
    status: 'pending',
    summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.'
  }, {
    id: 2,
    type:'steel',
    title: 'Request for steel',
    company: 'ACME Company',
    contact: 'Wile E Coyote',
    amount: '200  lbs',
    status: 'pending',
    summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.'
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
});