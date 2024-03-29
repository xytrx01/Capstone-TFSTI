﻿using System.Web.Optimization;

namespace Capstone_TFSTI
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/bootstrap.css",
            //          "~/Content/site.css"));


            // Login Resources
            bundles.Add(new StyleBundle("~/content/login").Include(
                        "~/Scripts/vendor/bootstrap/css/bootstrap.min.css",
                        "~/Content/fonts/font-awesome-4.7.0/css/font-awesome.min.css",
                        "~/Scripts/vendor/animate/animate.css",
                        "~/Scripts/vendor/animate/animate.css",
                        "~/Scripts/vendor/css-hamburgers/hamburgers.min.css",
                        "~/Scripts/vendor/select2/select2.min.css",
                        "~/Content/css/util.css",
                        "~/Content/css/loginpage.css"
                ));
            bundles.Add(new ScriptBundle("~/scripts/login").Include(
                        "~/Scripts/vendor/jquery/jquery-3.2.1.min.js",
                        "~/Scripts/vendor/bootstrap/js/popper.js",
                        "~/Scripts/vendor/bootstrap/js/bootstrap.min.js",
                        "~/Scripts/vendor/select2/select2.min.js",
                        "~/Scripts/vendor/tilt/tilt.jquery.min.js"
                ));
            // End of Login Resources


            // Dashboard Resources
            bundles.Add(new StyleBundle("~/style/admin").Include(
                        "~/Content/css/sa-dashboard-style.css"
                ));
            bundles.Add(new ScriptBundle("~/script/admin").Include(
                        "~/Scripts/js/chart1.js",
                        "~/Scripts/js/chart2.js",
                        "~/Scripts/js/chart3.js"
                ));
            // Add User JS to prevent regex and mvc conflict
            bundles.Add(new StyleBundle("~/script/adduser").Include(
                        "~/Scripts/AddUsers.js"
                ));
        }
    }
}
