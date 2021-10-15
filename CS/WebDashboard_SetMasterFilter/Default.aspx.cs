using System;

namespace WebDashboard_SetMasterFilter {
    public partial class Default : System.Web.UI.Page {
        protected void Page_Load(object sender, EventArgs e) {
            ASPxDashboard1.DashboardXmlPath = Server.MapPath("App_Data/Dashboard.xml");
        }
    }
}