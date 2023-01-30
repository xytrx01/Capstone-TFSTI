using System.Web.Mvc;
using System.Data;
using Newtonsoft.Json;
using Capstone_TFSTI.Models;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

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
            List<NewEmployeeModel> jc = new List<NewEmployeeModel>();
            string mainconn = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            SqlConnection sqlconn = new SqlConnection(mainconn);
            string sqlquery = "select Employee.emp_name,Employee.emp_hiredDate,Employee.emp_contact,Employee.emp_position,Status.IsActive,Status.Locked From Employee inner Join Status Employee.emp_no=Status.emp_no";
            SqlCommand sqlcomm = new SqlCommand(sqlquery, sqlconn);
            SqlDataAdapter sda = new SqlDataAdapter(sqlcomm);
            DataTable dt = new DataTable();
            sda.Fill(dt);
            foreach(DataRow dr in dt.Rows) 
            {
                NewEmployeeModel jcobj = new NewEmployeeModel();
                jcobj.emp_name = dr["emp_name"].ToString();
                jcobj.emp_hiredDate = dr["emp_hiredDate"].ToString();
                //jcobj.emp_contact = dr["emp_contact"].ToString();
                jcobj.emp_position = dr["emp_position"].ToString();
                jcobj.IsActive = dr["IsActive"].ToString();
                jcobj.IsLocked = dr["IsLocked"].ToString();
                jc.Add(jcobj);
            }
            return View();
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