function onBeforeRender(s) {
    let dashboardControl = s.GetDashboardControl();
    let viewerApiExtension = dashboardControl.findExtension('viewerApi');

    initializeFilters(viewerApiExtension);
}

function initializeFilters(viewerApiExtension) {
    function applyFilters() {
        var selectedValues = [['UK', 'Anne Dodsworth'], ['USA', 'Andrew Fuller']];
        var selectedRange = { minimum: new Date(2015, 1, 1), maximum: new Date(2015, 12, 31) };

        setMasterFilter('gridDashboardItem1', selectedValues);
        setRange('rangeFilterDashboardItem1', selectedRange);
    }

    function setMasterFilter(itemName, selectedValues) {
        if (viewerApiExtension.canSetMasterFilter(itemName)) {
            viewerApiExtension.setMasterFilter(itemName, selectedValues);
        }
    }

    function setRange(itemName, selectedRange) {
        if (viewerApiExtension.canSetMasterFilter(itemName)) {
            viewerApiExtension.setRange(itemName, selectedRange);
        }
    }

    function clearFilters() {
        clearMasterFilter('gridDashboardItem1');
        clearMasterFilter('rangeFilterDashboardItem1');
    }

    function clearMasterFilter(itemName) {
        if (viewerApiExtension.canClearMasterFilter(itemName)) {
            viewerApiExtension.clearMasterFilter(itemName);
        }
    }

    $("#setMasterFilterButton").dxButton({
        text: "Apply Filters",
        onClick: applyFilters

    });
    $("#clearMasterFilterButton").dxButton({
        text: "Clear Filters",
        onClick: clearFilters
    });
};