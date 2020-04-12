// JavaScript Document

//function initMap - function used in cunjunction with the API key provided on html page
function initMap() {

    //declare variables with lat & lng coordinates
    let highfalls = {
        lat: 45.087718,
        lng: -79.301441
    };

    let pottsfalls = {
        lat: 45.0874118,
        lng: -79.3020937
    };

    let bracebridgefalls = {
        lat: 45.0403817,
        lng: -79.3241932
    }

    let southfalls = {
        lat: 45.0012399,
        lng: -79.3026633
    }

    let eugeniafalls = {
        lat: 44.3131108,
        lng: -80.5273138
    }

    let hoggsfalls = {
        lat: 44.2871917,
        lng: -80.5454305
    }

    let hiltsfalls = {
        lat: 44.3125404,
        lng: -80.5464822
    }

    // Styles a map in night mode.
    //generated using google cloud platform
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 44.3888649,
            lng: -79.6856967
        },
        zoom: 7,
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#263c3f'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#38414e'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#212a37'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#17263c'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }
        ]



    });

    //in each instance we are instantiating a new instance of the Marker from google.maps.Marker and telling it the position on the map based on the variable name and the its lat and lng coordinates
    let marker = new google.maps.Marker({
        position: highfalls,
        map: map
    });
    let marker2 = new google.maps.Marker({
        position: pottsfalls,
        map: map
    });
    let marker3 = new google.maps.Marker({
        position: bracebridgefalls,
        map: map
    });
    let marker4 = new google.maps.Marker({
        position: southfalls,
        map: map
    });
    let marker5 = new google.maps.Marker({
        position: eugeniafalls,
        map: map
    });
    let marker6 = new google.maps.Marker({
        position: hoggsfalls,
        map: map
    });
    let marker7 = new google.maps.Marker({
        position: hiltsfalls,
        map: map
    });


    //variable icon used to store icon information
    //in each instance we are naming the variable, giving it a visible name for the user to see and then saying where the image is for the variable(icon)
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var newIcons = 'https://msotera.github.io/module5lab/img/';
    var icons = {
        parking: {
            name: 'Parking',
            icon: iconBase + 'parking_lot_maps.png'
        },
        home: {
            name: 'Home',
            icon: iconBase + 'library_maps.png'
        },
        info: {
            name: 'Info',
            icon: iconBase + 'info-i_maps.png'
        }

        //image for waterfall icon found at: 
        //https://commons.wikimedia.org/wiki/File:Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Waterfall_%E2%80%93_Nature_%E2%80%93_classic.png
        waterfall: {
            name: 'Waterfall',
            icon: newIcons + 'waterfall_icon.png'
        },
    };


    //variable features used to store marker information
    //in each instance we are putting the markers on the map based on their lat. & lng, and telling each position what type of marker we want to show on the map
    var features = [{
        position: new google.maps.LatLng(45.0867437, -79.3013296),
        type: 'info'
    }, {
        position: new google.maps.LatLng(45.0403811, -79.3079867),
        type: 'info'
    }, {
        position: new google.maps.LatLng(45.0015649, -79.3024022),
        type: 'info'
    }, {
        position: new google.maps.LatLng(44.3129044, -80.5255928),
        type: 'info'
    }, {
        position: new google.maps.LatLng(44.2852301, -80.5435717),
        type: 'info'
    }, {
        position: new google.maps.LatLng(44.2871917, -80.5454305),
        type: 'info'
    }, {
        position: new google.maps.LatLng(44.3159766, -80.5483882),
        type: 'info'
    }, {
        position: new google.maps.LatLng(45.0867437, -79.3013296),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(45.0403811, -79.3079867),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(45.0015649, -79.3024022),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(44.3129044, -80.5255928),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(44.2852301, -80.5435717),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(44.3159766, -80.5483882),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(44.3888649, -79.6856967),
        type: 'home'
    }, {
        position: new google.maps.LatLng(45.087718, -79.301441),
        type: 'waterfall'
    }, {
        position: new google.maps.LatLng(45.0874118, -79.3020937),
        type: 'waterfall'
    }, {
        position: new google.maps.LatLng(45.0403817, -79.3241932),
        type: 'waterfall'
    }, {
        position: new google.maps.LatLng(45.0012399, -79.3026633),
        type: 'waterfall'
    }, {
        position: new google.maps.LatLng(44.3131108, -80.5273138),
        type: 'waterfall'
    }, {
        position: new google.maps.LatLng(44.2871917, -80.5454305),
        type: 'waterfall'
    }];

    // Create markers.
    features.forEach(function(feature) {
        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
    });

    //design the legend
    //assign type, name, icon(image), where to put each key
    var legend = document.getElementById('legend');
    for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon = type.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
    }

    //map control
    //this tells us where the legend is going to be positioned on the map
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

}