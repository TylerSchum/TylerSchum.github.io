'use strict';

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
    catch (mess) {
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