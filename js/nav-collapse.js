// script that collapses navigation on mobile view.

document.querySelector('#nav-btn').addEventListener('click',showHideNav); //event listener for above

function showHideNav() {
    switch (this.getAttribute('aria-expanded')) {
        case 'false': this.setAttribute('aria-expanded','true');
        this.textContent = 'Hide Navigation';
        break;
        case 'true': this.setAttribute('aria-expanded','false');
        this.textContent = 'Show Navigation';
        break;
    };
} //end function