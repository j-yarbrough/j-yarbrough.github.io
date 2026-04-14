window.addEventListener('load',function () {
    document.querySelectorAll('tab-arrows button').forEach((arrowButton) => {
        arrowButton.addEventListener('click',arrowButtonTrigger);
    })
})
function arrowButtonTrigger () {
    var tabInterface = this.closest('tab-interface');
    var allTabs = tabInterface.querySelectorAll('[role="tab"]');
    var tabIndexToClick = tabInterface.querySelector('[role="tab"][aria-selected="true"]').getAttribute('id').replace('tab-','');
    var tabToClick;
    switch (this.getAttribute('data-pn')) {
        case 'p':  tabIndexToClick--; break;
        case 'n': tabIndexToClick++; break;
    }
    if (tabIndexToClick == 0) tabIndexToClick = allTabs.length;
    if (tabIndexToClick > allTabs.length) tabIndexToClick = 1;
    tabToClick = tabInterface.querySelector(`#tab-${tabIndexToClick}`);
    tabToClick.click();
    tabInterface.querySelector(`#tabpanel-heading-${tabIndexToClick}`).focus();
}