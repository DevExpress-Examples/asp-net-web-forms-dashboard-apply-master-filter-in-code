<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" 
    Inherits="WebDashboard_SetMasterFilter.WebForm1" %>

<%@ Register Assembly="DevExpress.Dashboard.v19.1.Web.WebForms, Version=19.1.7.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" 
    Namespace="DevExpress.DashboardWeb" TagPrefix="dx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>    
</head>
<body>
    <form id="form1" runat="server">

    <div id="setMasterFilterButton" style="float: left; margin-left: 150px;"></div>
    <div id="clearMasterFilterButton" style="float: left; margin-left: 150px;"></div>

    <div style="position: absolute; left: 0; right: 0; top:50px; bottom:0;">
        <dx:ASPxDashboard ID="ASPxDashboard1" runat="server" 
            WorkingMode="Viewer" 
            ClientInstanceName="webDashboard"
            Width="100%" Height="100%">
            <ClientSideEvents Init="function() { initializeFilters(); }" />
        </dx:ASPxDashboard>
    </div>
    </form>
    <script type="text/javascript" src="<%= Page.ResolveClientUrl("~/Scripts/MasterFiltering.js") %>"></script>
</body>
</html>

