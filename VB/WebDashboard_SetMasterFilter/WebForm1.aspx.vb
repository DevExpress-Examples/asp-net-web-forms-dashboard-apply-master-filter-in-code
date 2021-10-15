Imports System
Imports System.Web.UI
Imports System.Web.UI.WebControls

Namespace WebDashboard_SetMasterFilter

    Public Partial Class WebForm1
        Inherits Page

        Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
            ASPxDashboard1.DashboardXmlPath = Server.MapPath("App_Data/Dashboard.xml")
        End Sub
    End Class
End Namespace
