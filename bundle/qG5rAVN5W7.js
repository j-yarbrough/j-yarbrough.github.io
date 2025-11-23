window.addEventListener('load',function(){
    document.querySelectorAll('form-wrapper').forEach((formWrapper) => {
        formWrapper.firstElementChild.addEventListener('submit',validateForm)
    })
})

function validateForm() {
    var isValid = true;
    var firstErrorField = undefined;
    var runningOnLocal = false; //stores if running locally, changes some form behaviors for testing
    var subjectField = this.querySelector('input[name="subject"]');
    if (window.location.hostname.toLowerCase().includes('localhost')) {
        runningOnLocal = true;
        event.preventDefault();
    }
    this.querySelectorAll('[aria-required]').forEach((fieldToValidate) => {
 if (!validateField(fieldToValidate)) {
    if (isValid) {
        isValid = false;
        firstErrorField= fieldToValidate;
    }
 }
    })
    if (!isValid) {
        event.preventDefault();
        firstErrorField.focus();
    } else {
        subjectField.value = '[yarbrough.info contact form] ' + subjectField.value;
        if (runningOnLocal) {alert('Form is valid and would have submitted.');}
    }
}
function validateField(valThisField) {
var fieldContainer =     valThisField.parentElement;
var label=fieldContainer.querySelector('label').firstChild.textContent;
var errorContainer = fieldContainer.querySelector('.validation-feedback');
var fieldValue = valThisField.value.trim();
valThisField.removeAttribute('aria-invalid');
errorContainer.textContent = '';
if (fieldValue.length == 0){
    invalidateField(valThisField,errorContainer,`${label} cannot be blank.`);
    return false;
} else if (valThisField.getAttribute('inputmode') == 'email') {
    if ((fieldValue.length >= 6) || (fieldValue.includes('.')) || (fieldValue.includes('@'))){        
        return true;
    } else {
        invalidateField(valThisField,errorContainer,`${label} is not valid. Example: name@example.com.`);
        return false;
    }
} else {
    return true;
}
}

function invalidateField (field, errorContainer, errorText) {
    field.setAttribute('aria-invalid','true');
    errorContainer.textContent = errorText;
}