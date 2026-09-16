window.addEventListener('load',function(){
    document.querySelectorAll('form-wrapper').forEach((formWrapper) => {
        formWrapper.firstElementChild.addEventListener('submit',validateForm)
    })
})

function validateForm() {
    var firstErrorField = undefined;
    var runningOnLocal = window.location.hostname.toLowerCase().includes('localhost'); //stores if running locally, changes some form behaviors for testing
    if (runningOnLocal) event.preventDefault();
    this.querySelectorAll('[aria-required="true"], [inputmode="email"').forEach((fieldToValidate) => {
 if (!validateField(fieldToValidate)) {
    if (!firstErrorField) firstErrorField= fieldToValidate;
 }
    })
    if (firstErrorField) {
        event.preventDefault();
        firstErrorField.focus();
    } else if (runningOnLocal) alert('Form is valid and would have submitted.');
}
function validateField(valThisField) {
var label=valThisField.closest('text-area, text-input').querySelector('label').textContent.replace('*','');
var fieldValue = valThisField.value.trim();
var errorMessage = '';
var isValid = true;
var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if ((!fieldValue) && (valThisField.hasAttribute('aria-required'))){
    errorMessage = `${label} cannot be blank.`
    isValid=false;
} else if (valThisField.getAttribute('inputmode') == 'email' && !emailRegEx.test(fieldValue) && fieldValue) {
    errorMessage = 'Enter a valid email address, such as name@example.com.';
    isValid = false;
} 
valThisField.ariaInvalid = isValid ? 'false' : 'true';
valThisField.closest('text-area, text-input').querySelector('.validation-feedback').textContent = errorMessage;
return isValid;
}