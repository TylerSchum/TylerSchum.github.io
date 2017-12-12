"use strict";

// Get current location and activate browser location
function geoTest() {
        navigator.geolocation.getCurrentPosition(createMap, fail, { timeout: 10000 });
}

function createMap(position) {
    // empty map div
    $('#map').html('');
    // coordinates for store location
    var Lat = 40.7254725;
    var Lng = -73.50288089999998;
    // settings for map
    var mapOptions = {
        Center: new google.maps.LatLng(Lat, Lng),
        zoom: 14
    };
    // create map using settings
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    // add a marker on map at store location
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(Lat, Lng),
        map: map,
        name: 'Hunter Recording Studios'
    });
    setTimeout(checkMapFail, 2000);
}

// function to check if google maps failed key check
function checkMapFail() {
    var mapDiv = $('#map')
    // the fail creates 6 divs instead of the APIs normal 82
    if (mapDiv.find('div').length === 6) {
        fail();
    }
}

// fallback image of map if user denies location access
function fail() {
    $('#map').html('<img src="images/map.jpg">');
}

// form validation function for price calculator
function validateForm() {
    var hours = $('#hours').val();
    var studio = $('input[type="radio"]');
    var priceField = $('#priceField');
    var validate = false;
    // for loop to check if any radial buttons have been checked
    for (let i = 0; i < studio.length; i++) {
        if (studio[i].checked === true) {
            validate = true;
        }
    }
    try {
        // check if hours is a proper number
        if ((hours > 0) && (hours < 11) && (hours !== '')) {
            // do we have a dial butto nchecked off?
            if (validate === true) {
              price();
            } else {
                // error message
                    throw 'Please fill out the above form completely to see a price estimate.';
            }
        } else {
            // error message
            throw 'Please fill out the above form completely to see a price estimate.';
        }
    }
    // put error message in the price display div
    catch(mess){
        $('#priceField').html(mess).css('font-size', '');
    }
}

function price() {
    var total;
    var hourly = 20;
    var hours = $('#hours').prop('value');
    var engineer = $('#engineer').prop('checked');
    var studio = $('input[type="radio"]');
    var studioChoice;
    var priceField = $('#priceField');
    // check if engineer has been requested
    if (engineer === true) {
        hourly = 100;
    }
    // for loop checks which studio has been selected
    for (let i = 0; i < studio.length; i++) {
        if (studio[i].checked === true) {
            studioChoice = studio[i].value;
        }
    }
    // increases hourly by corresponding amount based on studio selection
    if (studioChoice === 'classical') {
        hourly += 120;
    } else if (studioChoice === 'jazz') {
        hourly += 120; 
    } else if (studioChoice === 'hipHop') {
        hourly += 180;
    } else if (studioChoice === 'vocals') {
        hourly += 80;
    } else if (studioChoice === 'editing') {
        hourly += 20;
    }
    // total is the new hourly rate multiplied by the number of hours selected
    total = hours * hourly;
    // set the total into the price div and add some css settings
    $('#priceField').html(`$${total}.00`).css('font-size', '1.5em');
}


$('input').on('change', validateForm);
$('form').on('submit', validateForm);

$(window).on('load', geoTest);