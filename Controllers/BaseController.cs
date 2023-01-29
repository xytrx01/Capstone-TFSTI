using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Capstone_TFSTI.Controllers
{
    public class BaseController : Controller
    {
        public ActionResult Login()
        {
            return View();
        }

        //[HttpPost]
        //public ActionResult Login()
        //{
        //    return View();
        //}
    }
}