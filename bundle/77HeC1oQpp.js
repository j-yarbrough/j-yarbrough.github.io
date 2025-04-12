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