window.addEventListener('load',function() {
    document.querySelectorAll('form-wrapper').forEach((formContainer) => {
        formContainer.firstElementChild.addEventListener('submit',submitForm);
        formContainer.querySelectorAll('[aria-required="true"]').forEach((requiredField) => {
            requiredField.addEventListener('blur',inlineValidateCurrentlyValid);
        })
    })
});

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
    if ((fieldToValidate.hasAttribute('aria-invalid')) == isValid) {
        applyValidationState(fieldToValidate, isValid)
    }
    return isValid;
}

function submitForm() {
    var firstErrorField = undefined;
    var fieldsToValidate = this.querySelectorAll('[aria-required="true"]');
    var errorCount = 0;
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
        firstErrorField.focus();
    }
}

function applyValidationState (field, validOrNot) {
    var fieldID = field.getAttribute('id');
    switch (validOrNot) {
        case true: field.removeAttribute('aria-invalid');
        field.removeEventListener('input',inlineValidationFieldCurrentlyInvalid);
        field.addEventListener('blur',inlineValidateCurrentlyValid);
        if (document.querySelector(`#${fieldID}-helper`)) {
            field.setAttribute('aria-describedby',`${fieldID}-helper`)
        } else {
            field.removeAttribute('aria-describedby');
        }
        break;
        case false: field.setAttribute('aria-invalid','true');
        field.removeEventListener('blur',inlineValidateCurrentlyValid);
        field.addEventListener('input',inlineValidationFieldCurrentlyInvalid);
        if (document.querySelector(`#${fieldID}-helper`)) {
            field.setAttribute('aria-describedby',`${fieldID}-error ${fieldID}-helper`);
        } else {
            field.setAttribute('aria-describedby',`${fieldID}-error`);
        }
        break;
    }
}
function inlineValidateCurrentlyValid() {
    var inputBeingValidated = validateField(this);
    if (inputBeingValidated) {
        return;
    } else {
        var fieldLabelAndError = getFieldLabelAndError(this);
        ariaLiveHandler(`Error with ${fieldLabelAndError[0]} field which reads ${fieldLabelAndError[1]}`);
    }
    }

function inlineValidationFieldCurrentlyInvalid() {
    var isItValid = validateField(this);
    if (isItValid) {
        var fieldLabel = getFieldLabelAndError(this);
        ariaLiveHandler(`Error with ${fieldLabel[0]} field removed`);
    } else {
        return
    }
}

function getFieldLabelAndError(field) {
var inputComponent = field.closest('text-input, text-area');
var fieldLabel = inputComponent.querySelector('.label-text').textContent;
var errorText = inputComponent.querySelector('.error-text').textContent;
return [fieldLabel, errorText]
}