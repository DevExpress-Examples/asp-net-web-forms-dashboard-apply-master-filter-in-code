<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebDashboard_SetMasterFilter.Default" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title></title>
    <script src="Scripts/MasterFiltering.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div id="setMasterFilterButton" style="float: left; margin-left: 10px;"></div>
        <div id="clearMasterFilterButton" style="float: left; margin-left: 20px;"></div>
        <div style="position: absolute; left: 0; right: 0; top:50px; bottom:0;">
            <dx:ASPxDashboard ID="ASPxDashboard1" runat="server" WorkingMode="Viewer" ClientInstanceName="webDashboard"
                Width="100%" Height="100%" AccessKey="q">
                <ClientSideEvents BeforeRender="onBeforeRender" />
            </dx:ASPxDashboard>
        </div>
    </form>
</body>
</html>

