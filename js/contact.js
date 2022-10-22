//script for contact form validation

//event listener

document.getElementById('contact-form').addEventListener('submit',validateForm);

//function to validate form

function validateForm() {
    var fieldsToValidate = document.querySelectorAll('input[type="text"][aria-required], textarea[aria-required="true"]');
    var cansubmit = true;
    var firstErrorField = null;
for (var i = 0; i < fieldsToValidate.length; i++) { //loop through required fields
if (fieldsToValidate[i].hasAttribute('inputmode') && (fieldsToValidate[i].getAttribute('inputmode') == 'email') && (fieldsToValidate[i].tagName == 'INPUT')) {
    switch (fieldsToValidate[i].value.includes('@')) {
        case true: fieldIsValid(fieldsToValidate[i]);
        break;
        case false: fieldIsInvalid(fieldsToValidate[i]);
    } //end switch
} else if (((fieldsToValidate[i].tagName == 'INPUT') && (fieldsToValidate[i].getAttribute('type') == 'text')) || (fieldsToValidate[i].tagName = 'TEXTAREA')) {
switch (fieldsToValidate[i].value != '') {
case true: fieldIsValid(fieldsToValidate[i]);
break;
case false: fieldIsInvalid(fieldsToValidate[i]);
break;
} //end switch
} //end if statements for input type
} //end loop
    if (cansubmit == false) {
        event.preventDefault();
        firstErrorField.focus();
    } //end if
    function fieldIsValid (field) {
        if (field.hasAttribute('aria-invalid')) {
            field.removeAttribute('aria-invalid');
            field.removeAttribute('aria-describedby');
        } //end if
    } //end sub-fn
    function fieldIsInvalid(field) {
        if (field.hasAttribute('aria-invalid') == false) {
            field.setAttribute('aria-invalid','true');
            field.setAttribute('aria-describedby', field.getAttribute('id') + '-error');
        } //end if
        if (cansubmit) {
            cansubmit = false;
            firstErrorField = field;
        } //end if
    } //end sub-fn
} //end function