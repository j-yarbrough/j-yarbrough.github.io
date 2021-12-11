document.getElementById("contact-form").addEventListener("submit",function(evt)
  {
  
  var response = grecaptcha.getResponse();
  var canSubmit = true;
  var errorCount = 0;
  var robotError = document.getElementById('robot-error');
  var nameError = document.getElementById('name-error');
  var emailError = document.getElementById('email-error');
  var nameField = document.getElementById('submitter-name');
  var emailAddressField = document.getElementById('email-address');
  var errorBlock = document.getElementById('error-block');
  var errorLive = document.getElementById('error-live');
  var ariaAlert = document.getElementById('aria-live')
  ariaAlert.textContent = '';
  switch (response.length == 0) {
      case true: canSubmit = false;
      errorCount++;
robotError.hidden = false;
break;
case false: robotError.hidden = true;
break;
  }
  switch (nameField.value.length == 0) {
      case true: canSubmit = false;
      errorCount++;
      nameError.hidden = false;
      nameField.setAttribute('aria-describedby','name-error');
      break;
      case false: nameError .hidden = true;
      nameField.removeAttribute('aria-describedby');
      break;
  }
  switch (emailAddressField.value.includes('@')) {
      case false: canSubmit = false;
      errorCount++;
      emailError.hidden = false;
      emailAddressField.setAttribute('aria-describedby','email-error');
      break;
      case true: emailError.hidden = true;
      emailAddressField.removeAttribute('aria-describedby');
      break;
  }
  switch (canSubmit) {
      case true: break;    
      case false: evt.preventDefault();
      errorBlock.hidden = false;
      errorBlock.focus();
      errorLive.textContent = errorTextGenerate(errorCount) + ':';
      ariaAlert.textContent = errorTextGenerate(errorCount);
      return false;
      break;
  }
})

function errorTextGenerate(howManyErrors) {
    var errorMsg = ''
    if (howManyErrors == 1) {
        errorMsg = 'There was an error submitting the form';
    } else if (howManyErrors > 1) {
        errorMsg = 'There were ' + howManyErrors + ' errors submitting the form';
    };
    return errorMsg;
}