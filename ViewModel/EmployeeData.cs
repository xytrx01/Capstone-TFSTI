using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Capstone_TFSTI.Models;

namespace Capstone_TFSTI.ViewModel
{
    public class EmployeeData
    {
        public IEnumerable<Employee> employees { get; set; }
        public IEnumerable<Status> statuses { get; set; }
    }
}