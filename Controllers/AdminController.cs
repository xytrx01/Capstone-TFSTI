using System.Web.Mvc;
using System.Data;
using Newtonsoft.Json;
using Capstone_TFSTI.Models;
using Capstone_TFSTI.ViewModel;
using System.Collections.Generic;
using System.Linq;

namespace Capstone_TFSTI.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin

       
        public ActionResult Dashboard()
        {
            if(Session["emp_no"] == null)
            {
                return RedirectToAction("Login", "Base");
            }
            return View();
        }

        //  Inventory
        public ActionResult Inventory()
        {
            return View();
        }
        public ActionResult AddItem()
        {
            return View();
        }

        //  Users
       public ActionResult Users()
        {
            TFSEntity obj = new TFSEntity();
           
            return View(obj.Employee.ToList());
        }

       

        public ActionResult AddUsers()
        {
            return View();
        }

        //  Purchasing
        #region
        public ActionResult Purchasing()
        {
            return View();
        }
        public ActionResult AddPurchase()
        {
            return View();
        }
        public ActionResult ExportPurchase()
        {
            return View();
        }
        public ActionResult PrintPurchase()
        {
            return View();
        }
        #endregion

        public ActionResult PurchaseRequisition()
        {
            return View();
        }

        //  Deployment Requisition
        #region
        public ActionResult DeploymentRequisition()
        {
            return View();
        }
        public ActionResult AddDeploy()
        {
            return View();
        }
        public ActionResult ExportDeploy()
        {
            return View();
        }
        public ActionResult PrintDeploy()
        {
            return View();
        }
        #endregion

        //  Supply
        #region
        public ActionResult SupplyRequisition()
        {
            return View();
        }
        public ActionResult AddSupply()
        {
            return View();
        }
        public ActionResult PrintSupply()
        {
            return View();
        }
        public ActionResult ExportSupply()
        {
            return View();
        }
        #endregion

        public ActionResult Projects()
        {
            return View();
        }

        public ActionResult Logout()
        {

            // DONT FORGET TO CLEAR SESSIONS, TOKENS AND OTHERS

            return RedirectToAction("Login", "Base");
        }

    }
}