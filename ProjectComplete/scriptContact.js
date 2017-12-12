// global variables for validity
var emailValidity = false;
var fnameValidity = false;
var lnameValidity = false;
var phoneValidity = false;

// function to check if a proper email has been entered
function validateEmail() {
    var emailInput = $("#email");
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    // compare email value with regexp
    if (emailCheck.test(emailInput.val()) === false) {
        // set email input to be a red hue
        $('#email').css({'background-color': 'rgb(250, 210, 210)'});
        emailValidity = false;
        
    } else {
        // remove any email error styling
        $('#email').css({'background-color': ''});
        emailValidity = true;
    }
}

// function to check if a first name has been entered
function validatefName() {
    var fnameInput = $('#fname');
    // check for an empty name box
    if (fnameInput.val() === '') {
        $('#fname').css({'background-color': 'rgb(250, 210, 210)'});
        fnameValidity = false;
    } else {
        $('#fname').css({ 'background-color': '' });
        fnameValidity = true;
    }
}

// function to check if a last name has been entered
function validatelName() {
    var lnameInput = $('#lname');
    // check for an empty box
    if (lnameInput.val() === '') {
        $('#lname').css({'background-color': 'rgb(250, 210, 210)'});
        lnameValidity = false;
    } else {
        $('#lname').css({ 'background-color': '' });
        lnameValidity = true;
    }
}

// function to check for a valid phone number
function validatePhone() {
    var phoneInput = $('#phone');
    var phoneCheck = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    // check phone input for values matching normal phone user input
    if (phoneCheck.test(phoneInput.val()) === false) {
        $('#phone').css({ 'background-color': 'rgb(250, 210, 210)' });
        phoneValidity = false;
    } else {
        $('#phone').css({ 'background-color': '' });
        phoneValidity = true;
    }
}

// function that checks all form validity
function validateForm() {
    validateEmail();
    validatefName();
    validatelName();
    validatePhone();
    if (emailValidity && fnameValidity && lnameValidity && phoneValidity) {
        // redirect to confirmation page
        window.location.replace('confirm.html');
        return false;
    } else {
        return false;
    }
}