var dashboardControl;
var viewerApiExtension;

function onBeforeRender(s) {
    dashboardControl = s.GetDashboardControl();
    viewerApiExtension = dashboardControl.findExtension('viewerApi');
    if (dashboardControl)
        dashboardControl.on('dashboardEndUpdate', initializeControls);
}

function initializeControls() {
    $("#setMasterFilterButton").dxButton({
        text: "Apply Filters",
        onClick: applyFilters

    });
    $("#clearMasterFilterButton").dxButton({
        text: "Clear Filters",
        onClick: clearFilters
    });
};

function applyFilters() {
    var selectedValues = [['UK', 'Anne Dodsworth'], ['USA', 'Andrew Fuller']];
    var selectedRange = { minimum: new Date(2015, 1, 1), maximum: new Date(2015, 12, 31) };

    if (viewerApiExtension.canSetMasterFilter('gridDashboardItem1')) {
        viewerApiExtension.setMasterFilter('gridDashboardItem1', selectedValues);
    }
    if (viewerApiExtension.canSetMasterFilter('rangeFilterDashboardItem1')) {
        viewerApiExtension.setRange('rangeFilterDashboardItem1', selectedRange);
    }
}

function clearFilters() {
    if (viewerApiExtension.canClearMasterFilter('gridDashboardItem1')) {
        viewerApiExtension.clearMasterFilter('gridDashboardItem1');
    }
    if (viewerApiExtension.canClearMasterFilter('rangeFilterDashboardItem1')) {
        viewerApiExtension.clearMasterFilter('rangeFilterDashboardItem1');
    }
}