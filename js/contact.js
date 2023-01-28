// script to handle all contact form validation actions

//global variables

var formContainer = document.querySelector('#contact-form');
var fieldsToValidate = document.querySelectorAll('input[aria-required], textarea[aria-required]');

//event listeners

formContainer.addEventListener('submit',submitForm);

for (var i = 0; i < fieldsToValidate.length; i++) {
    fieldsToValidate[i].addEventListener('blur',fieldValidateOnBlur);
    fieldsToValidate[i].addEventListener('input',fieldClearValidate);
}

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

function fieldValidateOnBlur () {
    var fieldId = this.getAttribute('id');
    var labelId = fieldId + '-label';
    var errorTextId = fieldId + '-error-text';
    var labelText = document.querySelector('#' + labelId).textContent;
    var errorText = document.querySelector('#' + errorTextId).textContent;
    var announcementReads = 'Error with ' + labelText + ' field which reads ' + errorText;
    if (this.hasAttribute('aria-invalid')) {
        return;
    } else {
        switch (validateField(this)) {
            case true: break;
            case false: this.setAttribute('aria-invalid','true');
            setAriaLabel(this);
            ariaLiveHandler(announcementReads);
            break;
        }
    }
}

function fieldClearValidate() {
    if ((this.hasAttribute('aria-invalid')) == false) {
        return;
    } else {
        switch (validateField(this)) {
            case false: break;
            case true: this.removeAttribute('aria-invalid');
            this.removeAttribute('aria-labelledby');
            ariaLiveHandler('Error removed.');
            break;
        }
    }
}

function submitForm() {
    var canSubmit = true;
    var firstErrorField = undefined;
    var subjectField = document.querySelector('#subject')
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
            if (canSubmit) {
                canSubmit = false;
                firstErrorField = fieldsToValidate[i];
            }
            break;
        }
    }
    switch (canSubmit) {
        case true: break;
        case false: event.preventDefault();
        firstErrorField.focus();
    }
}