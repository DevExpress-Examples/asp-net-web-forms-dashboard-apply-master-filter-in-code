<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128579785/24.2.1%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T490897)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->

# Dashboard for Web Forms - How to Apply Master Filter on the Client

This example shows how to apply a master filter in the Web Dashboard on the client.

![Web Dashboard - Apply Master Filtering values](images/master-filtering-example.png)

- The [ViewerApiExtension.setMasterFilter](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension?p=netframework#js_devexpress_dashboard_viewerapiextension_setmasterfilter_itemname_values_) method call applies the Master Filter values to the Grid item.
- The [ViewerApiExtension.setRange](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtension#js_devexpress_dashboard_viewerapiextension_setrange_itemname_range_) method call applies the range to the Range Filter item.


The [dxButton](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxButton/)'s `onClick` event handler calls these methods.

## Files to Review

* [MasterFiltering.js](./CS/WebDashboard_SetMasterFilter/Scripts/MasterFiltering.js) (VB: [MasterFiltering.js](./VB/WebDashboard_SetMasterFilter/Scripts/MasterFiltering.js))
* [Default.aspx](./CS/WebDashboard_SetMasterFilter/Default.aspx) (VB: [WebForm1.aspx](./VB/WebDashboard_SetMasterFilter/Default.aspx))
* [Default.aspx.cs](./CS/WebDashboard_SetMasterFilter/Default.aspx.cs) (VB: [WebForm1.aspx.vb](./VB/WebDashboard_SetMasterFilter/Default.aspx.vb))

## Documentation

- [Interactivity in the Web Dashboard](https://docs.devexpress.com/Dashboard/116985/web-dashboard/create-dashboards-on-the-web/interactivity?p=netframework)

## More Examples

- [Dashboard for Web Forms - How to apply Master Filtering in OLAP mode](https://github.com/DevExpress-Examples/web-forms-dashboard-apply-master-filtering-in-olap)
- [Dashboard for MVC - How to Apply Master Filter on the Client](https://github.com/DevExpress-Examples/mvc-dashboard-apply-master-filtering-in-code)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=asp-net-web-forms-dashboard-apply-master-filter-in-code&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=asp-net-web-forms-dashboard-apply-master-filter-in-code&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
