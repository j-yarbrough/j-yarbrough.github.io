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
  var errorIntro = document.getElementById('error-intro');
  var messageLive = document.getElementById('message-live');
  switch (response.length == 0) {
      case true: errorCount++;
robotError.hidden = false;
break;
case false: robotError.hidden = true;
break;
  }
  switch (nameField.value.length == 0) {
      case true: errorCount++;
      nameError.hidden = false;
      nameField.setAttribute('aria-describedby','name-error');
      break;
      case false: nameError .hidden = true;
      nameField.removeAttribute('aria-describedby');
      break;
  }
  switch (emailAddressField.value.includes('@')) {
      case false: errorCount++;
      emailError.hidden = false;
      emailAddressField.setAttribute('aria-describedby','email-error');
      break;
      case true: emailError.hidden = true;
      emailAddressField.removeAttribute('aria-describedby');
      break;
  }
  if (errorCount > 0) {
      canSubmit = false;
  }
  switch (canSubmit) {
      case true: break;
      case false: evt.preventDefault();
      errorBlock.hidden = false;
      errorIntro.textContent = errorIntroTextGenerator(errorCount);
      messageLive.textContent = errorLiveRegion(errorCount);
      errorBlock.focus();
      return false;
      break;
  }
})
function errorIntroTextGenerator(howManyErrors) {
    var textOutput = '';
    var magicWord = '';
    if (howManyErrors == 1) {
magicWord = 'error';
    } else if (howManyErrors > 1) {
        magicWord = 'errors';
    };
    textOutput = 'Please address the below ' + magicWord + ' and try submitting the form again.';
    return textOutput;
}
function errorLiveRegion (howManyErrors) {
    var textOutput = '';
    var isPlural = ''
    if (howManyErrors == 1) {
textOutput = 'There was an error trying to submit the form.'
isPlural = 'error';
    } else if (howManyErrors > 1) {
        textOutput = 'There were errors trying to submit the form.';
        isPlural = 'errors';
    }
    textOutput += ' Please arrow down to review the ' + isPlural + ' and try submitting the form again.';
    return textOutput;
}