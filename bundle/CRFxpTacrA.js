window.addEventListener('load',function(){
    document.querySelectorAll('form-wrapper').forEach((formWrapper) => {
        formWrapper.firstElementChild.addEventListener('submit',validateForm)
    })
})

function validateForm() {
    var firstErrorField = undefined;
    var runningOnLocal = window.location.hostname.toLowerCase().includes('localhost'); //stores if running locally, changes some form behaviors for testing
    var subjectField = this.querySelector('input[name="subject"]');
    if (runningOnLocal) event.preventDefault();
    this.querySelectorAll('[aria-required="true"], [inputmode="email"').forEach((fieldToValidate) => {
 if (!validateField(fieldToValidate)) {
    if (!firstErrorField) firstErrorField= fieldToValidate;
 }
    })
    if (firstErrorField) {
        event.preventDefault();
        firstErrorField.focus();
    } else {
        if (subjectField) subjectField.value = '[yarbrough.info contact form] ' + subjectField.value;
        if (runningOnLocal) alert('Form is valid and would have submitted.');
    }
}
function validateField(valThisField) {
var label=valThisField.closest('text-area, text-input').querySelector('label').textContent.replace('*','');
var fieldValue = valThisField.value.trim();
var errorMessage = '';
var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if ((!fieldValue) && (valThisField.hasAttribute('aria-required'))){
    errorMessage = `${label} cannot be blank.`
} else if (valThisField.getAttribute('inputmode') == 'email' && !emailRegEx.test(fieldValue) && fieldValue) {
    errorMessage = 'Enter a valid email address, such as name@example.com.';
} 
var isValid = errorMessage.length == 0 ? true : false;
switch (isValid) {
    case true: valThisField.removeAttribute('aria-invalid'); break;
    case false: valThisField.setAttribute('aria-invalid','true'); break;
}
valThisField.closest('text-area, text-input').querySelector('.validation-feedback').textContent = errorMessage;
return isValid;
}
window.addEventListener('load',function() {
    document.querySelectorAll('.acc-header [aria-expanded]').forEach((accButton) => {
        accButton.addEventListener('click',triggerAccordion);
    })
});

function triggerAccordion()  {
    switch (this.ariaExpanded == 'true') {
        case true: this.ariaExpanded = 'false'; break;
        case false: this.ariaExpanded = 'true'; break;
    }
}
function ariaLiveHandler (messageToAnnounce) {
    var ariaRegion = document.querySelector('#aria-live');
    ariaRegion.textContent = '';
    setTimeout(ariaRegion.textContent = messageToAnnounce, 200);
}