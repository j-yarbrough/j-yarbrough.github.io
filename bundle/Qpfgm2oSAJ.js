//event listeners

document.querySelectorAll('form-wrapper').forEach((formContainer) =>{
    formContainer.firstElementChild.addEventListener('submit',submitForm);
});

//functions

//function to perform validation

function validateField (fieldToValidate) {
    var isValid;
    if (fieldToValidate.getAttribute('autocomplete') == 'email') {
        switch ((fieldToValidate.value.trim().length >= 6) && (fieldToValidate.value.includes('@')) && (fieldToValidate.value.includes('.')) && (fieldToValidate.value.includes(' ') == false)) {
            case true: isValid = true; break;
            case false: isValid = false; break;
        }
    } else {
        switch (fieldToValidate.value.trim().length != 0) {
            case true: isValid = true; break;
            case false: isValid = false; break;
        }
    }
    applyValidationState(fieldToValidate, isValid);
    return isValid;
}

function submitForm() {
    var firstErrorField = undefined;
    var fieldsToValidate = this.querySelectorAll('[aria-required="true"]');
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
        if (document.querySelector(`#${fieldID}-helper`)) {
            field.setAttribute('aria-describedby',`${fieldID}-helper`)
        } else {
            field.removeAttribute('aria-describedby');
        }
        break;
        case false: field.setAttribute('aria-invalid','true');
        if (document.querySelector(`#${fieldID}-helper`)) {
            field.setAttribute('aria-describedby',`${fieldID}-error ${fieldID}-helper`);
        } else {
            field.setAttribute('aria-describedby',`${fieldID}-error`);
        }
        break;
    }
}
// Script for accordions

document.querySelectorAll('#nav-btn, .accordion-button').forEach((accordionButtons) => {
    accordionButtons.addEventListener('click',triggerAccordion)
});

function triggerAccordion() {
    if (this.ariaExpanded == 'true') {
        this.ariaExpanded = false;
    } else {
        this.ariaExpanded = true;
}
}
// Handles all aria live announcements
// called on by multiple scripts

function ariaLiveHandler (messageToAnnounce) {
    var ariaRegion = document.querySelector("#aria-live-region");
    ariaRegion.textContent = '';
    setTimeout(ariaRegion.textContent = messageToAnnounce, 200);
}