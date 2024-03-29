﻿using System.Web.Mvc;
using System.Web.Routing;

namespace Capstone_TFSTI
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}",
                defaults: new { controller = "Base", action = "Login" }
            );
        }
    }
}
