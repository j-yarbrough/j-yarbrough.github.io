window.addEventListener('load',function() {
    document.querySelectorAll('.arrow-wrapper  button').forEach((arrowButton) => {
        arrowButton.addEventListener('click',arrowButtonTrigger);
    });
});
function arrowButtonTrigger() {
var panelIndex = this.getAttribute('data-index');
var tabToClick;
var headingToFocus;
switch(this.getAttribute('aria-label').includes('Previous')) {
    case true: panelIndex--; break;
    case false: panelIndex++; break;
}
tabToClick = document.getElementById(`tab-${panelIndex}`);
headingToFocus = document.getElementById(`tabpanel-heading-${panelIndex}`);
tabToClick.click();
headingToFocus.focus()
}