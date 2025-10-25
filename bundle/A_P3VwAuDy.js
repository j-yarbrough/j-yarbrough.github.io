window.addEventListener('load',function(){
    document.querySelectorAll('form-wrapper').forEach((formWrapper) => {
        formWrapper.firstElementChild.addEventListener('submit',validateForm)
    })
})

function validateForm() {
    var fieldsToValidate = this.querySelectorAll('[aria-required]');
    var isValid = true;
    var firstErrorField = undefined;
    fieldsToValidate.forEach((fieldToValidate) => {
 if (validateField(fieldToValidate) == false) {
    if (isValid) {
        isValid = false;
        firstErrorField= fieldToValidate;
    }
 }
    })
    if (isValid == false) {
        event.preventDefault();
        firstErrorField.focus();
    }
}
function validateField(valThisField) {
var fieldContainer =     valThisField.parentElement;
var fieldLabel=fieldContainer.querySelector('label').firstChild.textContent;
var errorContainer = fieldContainer.querySelector('.validation-feedback');
var fieldValue = valThisField.value.trim();
var isFieldValid = true;
valThisField.removeAttribute('aria-invalid');
errorContainer.textContent = '';
if (fieldValue.length == 0){
    invalidateField(valThisField,fieldLabel,errorContainer,'cannot be blank');
    isFieldValid = false;
} else if (valThisField.getAttribute('inputmode') == 'email') {
    if ((fieldValue.length < 6)&&(fieldValue.includes('.') ==false)&&(fieldValue.includes('@') == false)){
        invalidateField(valThisField,fieldLabel,errorContainer,'is not valid. Example: name@example.com');
        isFieldValid = false
    }
}
return isFieldValid;
}

function invalidateField (field, label, errorContainer, errorText) {
    field.setAttribute('aria-invalid','true');
    errorContainer.textContent = `${label} ${errorText}.`;
}