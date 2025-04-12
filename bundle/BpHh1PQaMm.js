// event listeners

document.querySelectorAll('.acc-button').forEach((accButton) => {
    accButton.addEventListener('click',triggerAccordion);
})

// function

function triggerAccordion () {
    var accContainer = this.closest('jy-acc');
    var indicator = accContainer.querySelector('.acc-indicator');
    var panel = accContainer.querySelector('.acc-panel');
    if (this.getAttribute('aria-expanded') == 'true') {
        this.setAttribute('aria-expanded','false');
        indicator.innerHTML = '&rarr;';
    } else {
        this.setAttribute('aria-expanded','true');
        indicator.innerHTML = '&darr;';
    }
    panel.classList.toggle('acc-panel-show');
    panel.classList.toggle('acc-panel-hide');
}
// event listener

document.getElementById('nav-btn').addEventListener('click',navTrigger);

//function

function navTrigger () {
    var navIndicator = document.getElementById('nav-indicator');
    var navPanel = document.getElementById('nav-links');
    if (this.getAttribute('aria-expanded') == 'true') {
        this.setAttribute('aria-expanded','false');
        navIndicator.innerHTML = '&rarr;';
    } else {
        this.setAttribute('aria-expanded','true');
        navIndicator.innerHTML = '&darr;';
    }
    navPanel.classList.toggle('nav-links-show');
}