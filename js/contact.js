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
    return isValid;
}

function ariaLiveHandler (messageToAnnounce) {
    var ariaRegion = document.querySelector("#aria-live-region");
    ariaRegion.textContent = '';
    setTimeout(ariaRegion.textContent = messageToAnnounce, 200);
}

function setAriaLabel(fieldToSet) {
    var fieldIdValue = fieldToSet.getAttribute('id');
    fieldToSet.setAttribute('aria-labelledby',fieldIdValue + '-label ' + fieldIdValue + '-error');
}

function submitForm() {
    var firstErrorField = undefined;
    var errorCount = 0;
    var errorCountString;
    for (var i = 0; i < fieldsToValidate.length; i++) {
        switch (validateField(fieldsToValidate[i])) {
            case true: if (fieldsToValidate[i].hasAttribute('aria-invalid')) {
                fieldsToValidate[i].removeAttribute('aria-invalid');
                fieldsToValidate[i].removeAttribute('aria-labelledby');
            }
            break;
            case false: if (fieldsToValidate[i].hasAttribute('aria-invalid') == false) {
                fieldsToValidate[i].setAttribute('aria-invalid','true');
                setAriaLabel(fieldsToValidate[i]);
            }
            if (errorCount == 0) {
                firstErrorField = fieldsToValidate[i];
            }
            errorCount++
            break;
        }
    }
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

function resetForm() {
    for (var i = 0; i <fieldsToValidate.length; i++) {
        if (fieldsToValidate[i].hasAttribute('aria-invalid')) {
            fieldsToValidate[i].removeAttribute('aria-invalid');
            fieldsToValidate[i].removeAttribute('aria-labelledby');
        }
    }
    ariaLiveHandler('All fields cleared');
}