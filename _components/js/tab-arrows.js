window.addEventListener('load',function () {
    this.document.querySelectorAll('tab-arrows button').forEach((arrowButton) => {
        arrowButton.addEventListener('click',arrowButtonTrigger);
    })
})
function arrowButtonTrigger () {
    var tabInterface = this.closest('tab-interface');
    var tabList = tabInterface.querySelector('[role="tablist"]');
    var numberOfTabs = tabList.querySelectorAll('[role="tab"]').length;
    var currentTabIndex = tabList.querySelector('[role="tab"][aria-selected="true"]').getAttribute('id').replace('tab-','');
    var tabIndexToClick = currentTabIndex;
    switch (this.getAttribute('aria-label')) {
        case 'Previous tab':  tabIndexToClick--; break;
        case 'Next tab': tabIndexToClick++; break;
    }
    if (tabIndexToClick == 0) tabIndexToClick = numberOfTabs;
    if (tabIndexToClick > numberOfTabs) tabIndexToClick = 1;
    tabList.querySelector(`#tab-${tabIndexToClick}`).click();
    tabInterface.querySelector(`#tabpanel-heading-${tabIndexToClick}`).focus();
}