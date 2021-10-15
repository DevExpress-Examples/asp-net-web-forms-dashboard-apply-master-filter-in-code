Imports System

Namespace WebDashboard_SetMasterFilter
	Partial Public Class [Default]
		Inherits System.Web.UI.Page

		Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
			ASPxDashboard1.DashboardXmlPath = Server.MapPath("App_Data/Dashboard.xml")
		End Sub
	End Class
End Namespace