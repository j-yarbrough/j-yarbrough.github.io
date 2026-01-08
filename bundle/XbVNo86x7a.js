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
        if (subjectField) subjectField.value = '[yarbrough.info contact form] ' + subjectField.value;;
        if (runningOnLocal) alert('Form is valid and would have submitted.');;
    }
}
function validateField(valThisField) {
var label=valThisField.closest('text-area, text-input').querySelector('label').firstChild.textContent;
var fieldValue = valThisField.value.trim();
var isValid = true;
var errorMessage = '';
if ((!fieldValue) && (valThisField.hasAttribute('aria-required'))){
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
    var errorContainer = field.closest('text-area, text-input').querySelector('.validation-feedback');
switch(validBoolean) {
    case true: field.removeAttribute('aria-invalid'); break;
    case false: field.setAttribute('aria-invalid','true'); break;
}
errorContainer.textContent = errorMessage
}
window.addEventListener('load',function () {
    document.querySelectorAll('.modal-open, .modal-close').forEach((dialogButton) => {
        dialogButton.addEventListener('click',modalActivate);
    })
})
function modalActivate() {
    var dialogContainer = document.querySelector('#' + this.getAttribute('aria-controls'));
    switch (this.classList.contains('modal-open')) {
        case true:  dialogContainer.showModal();break;
        case false: dialogContainer.close(); break;
    }
}