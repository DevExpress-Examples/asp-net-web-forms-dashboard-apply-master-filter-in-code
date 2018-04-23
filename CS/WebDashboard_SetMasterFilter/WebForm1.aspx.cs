using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebDashboard_SetMasterFilter
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ASPxDashboard1.DashboardXmlPath = Server.MapPath("App_Data/Dashboard.xml");
        }
    }
}