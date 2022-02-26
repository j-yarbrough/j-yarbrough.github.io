var contactForm = document.getElementById('contact-form');
var firstErrorField;

contactForm.addEventListener('submit',validateForm);

function validateForm() {
    var nameField = document.querySelector('#submitter-name');
    var nameError = document.querySelector('#name-error');
    var emailField = document.querySelector('#email-address');
    var emailError = document.querySelector('#email-error');
    var fieldsWithErrors = 0;
    firstErrorField = undefined;
    switch (nameField.value.length > 0) {
case true: fieldIsValid(nameField);
break;
case false: fieldIsInvalid(nameField,nameError);
fieldsWithErrors++;
break;
    } //end switch
    switch (emailField.value.includes('@')) {
case true: fieldIsValid(emailField);
break;
case false: fieldIsInvalid(emailField,emailError);
fieldsWithErrors++;
break;
    } //end switch
    if (fieldsWithErrors == 0) {
        return;
    } else if (fieldsWithErrors > 0) {
        event.preventDefault();
        firstErrorField.focus();
        return;
    } //end if
}//end function

function fieldIsValid(fieldVar) {
    if (fieldVar.hasAttribute('aria-invalid')) {
        fieldVar.removeAttribute('aria-describedby');
        fieldVar.removeAttribute('aria-invalid');
} //end if
    } //end function

function fieldIsInvalid(fieldVar, errorVar) {
    if (fieldVar.hasAttribute('aria-invalid') == false) {
        fieldVar.setAttribute('aria-describedby',errorVar.getAttribute('id'));
        fieldVar.setAttribute('aria-invalid','true');
    } //end if
    if (firstErrorField == undefined) {
        firstErrorField = fieldVar;
}
} //end function