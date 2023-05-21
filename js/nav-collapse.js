// script that collapses navigation on mobile view.

document.querySelector('#nav-btn').addEventListener('click',showHideNav); //event listener for above

function showHideNav() {
    var navBtnIndicator = this.firstElementChild;
    switch (this.getAttribute('aria-expanded')) {
        case 'false': this.setAttribute('aria-expanded','true');
        navBtnIndicator.innerHTML = '&darr;';
        break;
        case 'true': this.setAttribute('aria-expanded','false');
        navBtnIndicator.innerHTML = '&rarr;';
        break;
    };
} //end function