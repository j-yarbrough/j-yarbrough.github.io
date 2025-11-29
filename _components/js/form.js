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
var label=valThisField.parentElement.querySelector('label').firstChild.textContent;
var fieldValue = valThisField.value.trim();
var isValid = true;
var errorMessage = '';
if (!fieldValue){
    isValid = false;
    errorMessage = `${label} cannot be blank.`
} else if (valThisField.getAttribute('inputmode') == 'email') {
    if (((fieldValue.length >= 6) && (fieldValue.includes('.')) && (fieldValue.includes('@')))==false){
        isValid = false;
        errorMessage = 'Enter a valid email address, such as name@example.com.';
    }
} 
setField(valThisField,isValid,errorMessage);
return isValid;
}

function setField(field, validBoolean, errorMessage) {
    var errorContainer = field.parentElement.querySelector('.validation-feedback');
switch(validBoolean) {
    case true: field.removeAttribute('aria-invalid'); break;
    case false: field.setAttribute('aria-invalid','true'); break;
}
errorContainer.textContent = errorMessage
}