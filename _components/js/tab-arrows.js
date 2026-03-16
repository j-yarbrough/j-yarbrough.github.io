window.addEventListener('load',function() {
    document.querySelectorAll('.arrow-wrapper  button').forEach((arrowButton) => {
        arrowButton.addEventListener('click',arrowButtonTrigger);
    });
});
function arrowButtonTrigger() {
var panelIndex = this.closest('[role="tabpanel"]').getAttribute('data-index');
var tabInterface = this.closest('tab-interface');
switch(this.getAttribute('aria-label').includes('Previous')) {
    case true: panelIndex--; break;
    case false: panelIndex++; break;
}
tabInterface.querySelector(`#tab-${panelIndex}`).click();
tabInterface.querySelector(`#tabpanel-heading-${panelIndex}`).focus();
}