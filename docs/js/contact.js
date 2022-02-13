var contactForm = document.getElementById('contact-form');
var canSubmit;
var firstError;

contactForm.addEventListener('submit',validateForm);

function validateForm() {
    var nameField = document.querySelector('#submitter-name');
    var nameError = document.querySelector('#name-error');
    var emailField = document.querySelector('#email-address');
    var emailError = document.querySelector('#email-error');
    canSubmit = true;
    switch (nameField.value.length > 0) {
case true: fieldIsValid(nameField,nameError);
break;
case false: fieldIsInvalid(nameField,nameError);
break;
    } //end switch
    switch (emailField.value.includes('@')) {
case true: fieldIsValid(emailField,emailError);
break;
case false: fieldIsInvalid(emailField,emailError);
break;
    } //end switch
    switch (canSubmit) {
        case true: break;
        case false: event.preventDefault();
        firstError.focus();
        break;
    } //end switch
    return;
}//end function

function fieldIsValid(fieldVar, errorVar) {
    fieldVar.removeAttribute('aria-describedby');
    fieldVar.removeAttribute('aria-invalid');
    errorVar.setAttribute('hidden','hidden');
} //end function

function fieldIsInvalid(fieldVar, errorVar) {
    if (canSubmit == true) {
canSubmit = false;
firstError = fieldVar;
    } //end if
    errorVar.removeAttribute('hidden');
    fieldVar.setAttribute('aria-describedby',errorVar.getAttribute('id'));
    fieldVar.setAttribute('aria-invalid','true');
} //end function