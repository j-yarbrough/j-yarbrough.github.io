//script for contact form validation

//event listener

document.getElementById('contact-form').addEventListener('submit',validateForm);

//function to validate form

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
    } //end switch
} else{
switch (fieldsToValidate[i].value.length != 0) {
case true: fieldIsValid(fieldsToValidate[i]);
break;
case false: fieldIsInvalid(fieldsToValidate[i]);
break;
} //end switch
} //end if/else
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