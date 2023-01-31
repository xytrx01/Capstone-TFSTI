var ConfirmDelete = function (emp_id) {

    $("#hiddenEmployeeId").val(emp_id);
    $("#myModal").modal('show');

}

var DeleteEmployee = function () {

    $("#loaderDiv").show();

    var empId = $("#hiddenEmployeeId").val();

    $.ajax({

        type: "POST",
        url: "/Home/DeleteEmployee",
        data: { EmployeeId: empId },
        success: function (result) {
            $("#loaderDiv").hide();
            $("#myModal").modal("hide");
            $("#row_" + empId).remove();

        }

    })

}