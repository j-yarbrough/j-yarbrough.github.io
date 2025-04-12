// event listeners

document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click',triggerAccordion);
})

// function

function triggerAccordion () {
    var accordionContainer = this.closest('jy-acc');
    var indicator = accordionContainer.querySelector('.accordion-indicator');
    var panel = accordionContainer.querySelector('.accordion-panel');
    if (this.getAttribute('aria-expanded') == 'true') {
        this.setAttribute('aria-expanded','false');
        indicator.innerHTML = '&rarr;';
    } else {
        this.setAttribute('aria-expanded','true');
        indicator.innerHTML = '&darr;';
    }
    panel.classList.toggle('accordion-panel-show');
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