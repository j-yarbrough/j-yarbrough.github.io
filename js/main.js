// lazy loader for scripts
// Will load scripts only for components that are being used on pages.
// This script will check for certain selectors and append script tags to the end of the body element.

// Array for checks to be done
// Format for each check is [selector, filename]
// Note: Filename should not contain file extension

var indexOfChecks = [
    ['#nav-btn, .accordion-button','accordion'],
    ['#contact-form','contact'],
    ['#toc','toc']
    ]; //end index

    indexOfChecks.forEach((indexOfChecks) => {
        if  (document.querySelectorAll(indexOfChecks[0]).length > 0) {
            var elementBeingCreated = document.createElement('script');
            elementBeingCreated.setAttribute('src',`/js/${indexOfChecks[1]}.js`);
            document.body.appendChild(elementBeingCreated);
        }
    });