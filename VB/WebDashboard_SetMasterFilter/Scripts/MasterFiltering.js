function initializeFilters() {
    function applyFilters() {
        var selectedValues = [['UK', 'Anne Dodsworth'], ['USA', 'Andrew Fuller']];
        var selectedRange = new ASPxClientDashboardRangeFilterSelection();
        selectedRange.Minimum = new Date(2015, 1, 1);
        selectedRange.Maximum = new Date(2015, 12, 31);

        setMasterFilter('gridDashboardItem1', selectedValues);
        setRange('rangeFilterDashboardItem1', selectedRange);
    }

    function setMasterFilter(itemName, selectedValues) {
        if (webDashboard.CanSetMasterFilter(itemName)) {
            webDashboard.SetMasterFilter(itemName, selectedValues);
        }
    }

    function setRange(itemName, selectedRange) {
        if (webDashboard.CanSetMasterFilter(itemName)) {
            webDashboard.SetRange(itemName, selectedRange);
        }
    }

    function clearFilters() {
        clearMasterFilter('gridDashboardItem1');
        clearMasterFilter('rangeFilterDashboardItem1');
    }

    function clearMasterFilter(itemName) {
        if (webDashboard.CanClearMasterFilter(itemName)) {
            webDashboard.ClearMasterFilter(itemName);
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