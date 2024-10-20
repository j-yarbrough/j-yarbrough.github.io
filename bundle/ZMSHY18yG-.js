// Handles all aria live announcements
// called on by multiple scripts

function ariaLiveHandler (messageToAnnounce) {
    var ariaRegion = document.querySelector("#aria-live-region");
    ariaRegion.textContent = '';
    setTimeout(ariaRegion.textContent = messageToAnnounce, 200);
}
// script to handle all contact form validation actions

//global variables

var formContainer = document.querySelector('#contact-form');
var fieldsToValidate = document.querySelectorAll('input[aria-required], textarea[aria-required]');

//event listeners

formContainer.addEventListener('submit',submitForm);
formContainer.addEventListener('reset',resetForm);

//functions

//function to perform validation

function validateField (fieldToValidate) {
    var isValid;
    if (fieldToValidate.getAttribute('autocomplete') == 'email') {
        switch ((fieldToValidate.value.length >= 6) && (fieldToValidate.value.includes('@')) && (fieldToValidate.value.includes('.')) && (fieldToValidate.value.includes(' ') == false)) {
            case true: isValid = true; break;
            case false: isValid = false; break;
        }
    } else {
        switch (fieldToValidate.value != '') {
            case true: isValid = true; break;
            case false: isValid = false; break;
        }
    }
    applyValidationState(fieldToValidate, isValid);
    return isValid;
}

function submitForm() {
    var firstErrorField = undefined;
    var errorCount = 0;
    var errorCountString;
    fieldsToValidate.forEach((fieldsToValidate) => {
        switch (validateField(fieldsToValidate)) {
            case true: break;
            case false: if (errorCount == 0) {
                firstErrorField = fieldsToValidate;
            }
            errorCount++
            break;
        }
    });
    switch (errorCount == 0) {
        case true: break;
        case false: event.preventDefault();
        switch (errorCount == 1) {
            case true: errorCountString = 'error';
            break;
            case false: errorCountString = `${errorCount} errors`;
            break;
        }
        firstErrorField.focus();
        ariaLiveHandler(`Please fix the ${errorCountString} with this form and try submitting again.`);
    }
}

function applyValidationState (field, validOrNot) {
    var fieldID = field.getAttribute('id');
    switch (validOrNot) {
        case true: field.removeAttribute('aria-invalid');
        if (field.getAttribute('data-helper-text','true')) {
            field.setAttribute('aria-describedby',`${fieldID}-helper-text`)
        } else {
            field.removeAttribute('aria-describedby');
        }
        break;
        case false: field.setAttribute('aria-invalid','true');
        if (field.hasAttribute('data-helper-text')) {
            field.setAttribute('aria-describedby',`${fieldID}-error ${fieldID}-helper-text`);
        } else {
            field.setAttribute('aria-describedby',`${fieldID}-error`);
        }
        break;
    }
}

function resetForm() {
    fieldsToValidate.forEach((fieldsToValidate) => {
        applyValidationState(fieldsToValidate, true);
    });
    fieldsToValidate[0].focus();
    ariaLiveHandler('All fields cleared');
}