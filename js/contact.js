//script for contact form validation

var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit',validateForm);

function validateForm() {
    var fieldsToValidate = document.querySelectorAll('input[aria-required]');
    var cansubmit = true;
    var firstErrorField = null;
for (var i = 0; i < fieldsToValidate.length; i++) { //loop through required fields
if (fieldsToValidate[i].hasAttribute('inputmode')) {
    switch (fieldsToValidate[i].value.includes('@')) {
        case true: fieldIsValid(fieldsToValidate[i]);
        break;
        case false: fieldIsInvalid(fieldsToValidate[i]);
        if (cansubmit === true) {cansubmit = false;};
        if (firstErrorField === null) {firstErrorField = fieldsToValidate[i];};
    } //end switch
} else{
switch (fieldsToValidate[i].value.length != 0) {
case true: fieldIsValid(fieldsToValidate[i]);
break;
case false: fieldIsInvalid(fieldsToValidate[i]);
if (cansubmit === true) {cansubmit = false;};
if (firstErrorField === null) {firstErrorField = fieldsToValidate[i];};
break;
} //end switch
} //end if/else
} //end loop
    switch (cansubmit) {
case true: break;
case false: event.preventDefault();
firstErrorField.focus();
break;
    } //end switch
} //end function

function fieldIsValid(field) {
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
}

function fieldIsInvalid (field) {
    field.setAttribute('aria-invalid','true');
    field.setAttribute('aria-describedby',field.getAttribute('id') + '-error');
}