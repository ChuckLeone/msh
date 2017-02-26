angular.module('starter.services', ['ngStorage'])

.factory('Types', function() {
    var types = [
        { title: 'Steel', id: 0 },
        { title: 'Aluminum', id: 1 },
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

    var vendors = [{
        id: 0,
        company: 'Broadway Steel',
        contact: 'Dave Smith',
        address: '1234 Queen Street',
        city: 'Toronto',
        state: 'Ontario',
        zip: 'M5V 2A5',
        country: 'Canada',
        phone: '555-123-1234',
        email: 'info@steel.com',
        url: 'http://www.steel.com',
        international: true,
        materialType: 'stainless-steel',
        processType: 'plate',
        specifications: 'ASTM A588',
        face: 'img/logo.jpg',
        checked: false
    }, {
        id: 1,
        company: 'Metal Suppliers of America',
        contact: 'Charles Xavier',
        address: '123 Ellicott Street',
        city: 'Buffalo',
        state: 'New York',
        zip: '14203',
        country: 'USA',
        phone: '555-123-1234',
        email: 'info@aluminum.com',
        url: 'http://www.metalsupplyusa.com',
        international: true,
        materialType: 'channel',
        processType: 'aluminum',
        specifications: 'A-572',
        face: 'img/logo.jpg',
        checked: false
    }, {
        id: 2,
        type: 'iron',
        company: 'Stark Industries',
        contact: 'Anthony Stark',
        address: '123 Broadway',
        city: 'New York City',
        state: 'New York',
        zip: '10029',
        country: 'USA',
        phone: '555-123-1234',
        email: 'info@starkindustires.com',
        url: 'http://www.starkindustires.com',
        international: true,
        materialType: 'beam',
        processType: 'iron',
        specifications: 'A-36',
        face: 'img/logo-stark.jpg',
        checked: false
    }, {
        id: 3,
        type: 'copper',
        company: 'Copper Inc.',
        address: '222 Fifth Ave',
        city: 'New York City',
        state: 'New York',
        zip: '10022',
        country: 'USA',
        phone: '555-123-1234',
        email: 'info@copperinc.com',
        url: 'http://www.copperinc.com',
        international: true,
        materialType: 'pipe',
        processType: 'copper-clad',
        specifications: '6061-T6',
        face: 'img/logo.jpg',
        checked: false
    }, {
        id: 4,
        company: 'First American Steel',
        contact: 'John Goodman',
        address: '12 Delaware Ave',
        city: 'Buffalo',
        state: 'New York',
        zip: '14216',
        country: 'USA',
        phone: '555-123-1234',
        email: 'info@fasteel.com',
        url: 'http://www.fasteel.com',
        international: true,
        materialType: 'stainless-steel',
        processType: 'nickle-inconel',
        specifications: 'ASTM A588',
        face: 'img/logo.jpg',
        checked: false
    }, {
        id: 5,
        company: 'Metalheads',
        contact: 'John Five',
        address: '1234 Hertel Ave',
        city: 'Buffalo',
        state: 'New York',
        zip: '14216',
        country: 'USA',
        phone: '555-123-1234',
        email: 'info@metal.com',
        url: 'http://www.metalheads.com',
        international: true,
        materialType: 'angle',
        processType: 'hast-alloy',
        specifications: 'ASTM A588',
        face: 'img/logo.jpg',
        checked: false
    }, {
        id: 6,
        company: 'Fiberglass King',
        contact: 'Harold Johnson',
        address: '125 Broadyway',
        city: 'Buffalo',
        state: 'New York',
        zip: '14010',
        country: 'USA',
        phone: '555-123-1234',
        email: 'info@mfibr.com',
        url: 'http://www.fiberglassking.com',
        international: true,
        materialType: 'plate',
        processType: 'fiberglass',
        specifications: 'ASTM A588',
        face: 'img/logo.jpg',
        checked: false
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
    var requests = [{
        id: 0,
        type: 'steel',
        title: 'I need a ton of steel',
        company: 'Tesla Motors',
        contact: 'Elon Musk',
        amount: '5000 tons',
        status: 'pending',
        summary: 'lorem ipsum sed ante phasellus in massa ',
        face: 'img/elon.jpg'
    }, {
        id: 1,
        type: 'aluminum',
        title: 'got aluminum?',
        company: 'Springfield Power Plant',
        contact: 'Homer Simpson',
        amount: '400 tons',
        status: 'approved',
        summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.',
        face: 'img/homer.jpg'
    }, {
        id: 2,
        type: 'steel',
        title: 'Request for steel',
        company: 'ACME Company',
        contact: 'Wile E Coyote',
        amount: '200  lbs',
        status: 'pending',
        summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.',
        face: 'img/wile.jpg'
    }, {
        id: 3,
        type: 'iron',
        title: 'in the market for iron',
        company: 'ACME Company',
        contact: 'Wile E Coyote',
        amount: '200  lbs',
        status: 'approved',
        summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.',
        face: 'img/steve.jpg'
    }, {
        id: 4,
        type: 'aluminumn',
        title: 'Request for aluminium',
        company: 'ACME Company',
        contact: 'Wile E Coyote',
        amount: '200  lbs',
        status: 'pending',
        summary: 'lorem ipsum sed ante phasellus in massa curabitur dolor quisque lacus donec ipsum.',
        face: 'img/carmack.jpg'
    }, {
        id: 5,
        type: 'copper',
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

.factory('Proposals', function($localStorage) {

    var $storage = $localStorage.$default({
        proposals: []
    });

    var proposals = $storage.proposals;

    return {
        all: function() {
            return proposals;
        },
        remove: function(proposal) {
            proposals.splice(proposals.indexOf(proposal), 1);
        },
        add: function(proposal) {
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
        update: function(proposal) {
            proposals.push({
                vendors: proposal.vendors
            })
        },
        post: function() {
            $localStorage = proposals;
        },
        clear: function() {
            $localStorage.clear();
            console.log("local storage cleared!");
        }
    };

})

.factory('Items', function() {

    var items = [];

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
            console.log("item added" + items)
        },
        get: function(itemlId) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === parseInt(itemId)) {
                    return items[i];
                }
            }
            return null;
        },
        post: function() {
            Items = items;
        }
    };

});