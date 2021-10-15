<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128579785/21.1.6%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T490897)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* [MasterFiltering.js](./CS/WebDashboard_SetMasterFilter/Scripts/MasterFiltering.js) (VB: [MasterFiltering.js](./VB/WebDashboard_SetMasterFilter/Scripts/MasterFiltering.js))
* [WebForm1.aspx](./CS/WebDashboard_SetMasterFilter/WebForm1.aspx) (VB: [WebForm1.aspx](./VB/WebDashboard_SetMasterFilter/WebForm1.aspx))
* [WebForm1.aspx.cs](./CS/WebDashboard_SetMasterFilter/WebForm1.aspx.cs) (VB: [WebForm1.aspx.vb](./VB/WebDashboard_SetMasterFilter/WebForm1.aspx.vb))
<!-- default file list end -->
# ASPxDashboard - How to: Apply Master Filter in Code
<!-- run online -->
**[[Run Online]](https://codecentral.devexpress.com/t490897/)**
<!-- run online end -->


This example demonstrates how to apply a master filter in the [Web Dashboard](https://docs.devexpress.com/Dashboard/115955) on the [client side](https://docs.devexpress.com/Dashboard/116302) 

In this example, the [ASPxClientDashboard.SetMasterFilter](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboard#js_ASPxClientDashboard_SetMasterFilter_itemName_values_) method selects rows in the [Grid](https://docs.devexpress.com/Dashboard/117161/) dashboard item while the [ASPxClientDashboard.SetRange](https://docs.devexpress.com/Dashboard/js-ASPxClientDashboard#js_ASPxClientDashboard_SetRange_itemName_range_)  method selects the range in the [Range Filter](https://docs.devexpress.com/Dashboard/117168/) dashboard item.  These methods are called in the **onClick** event handler of the [dxButton](https://js.devexpress.com/DevExtreme/20_2/ApiReference/UI_Widgets/dxButton/).
