let jsonArray = [];
let baseDomain = "https://localhost:44342";
//let baseDomain = "http://tfsti.somee.com";


function GetAll() {

    fetch(baseDomain + '/Warehouse/Inventory')
        .then(res => {
            if (res.ok) {
                // API request was successful
                return res.json();
            } else {
                // Handle error if unsuccessful
                let table = document.querySelector('#myTable tbody');
                // clear table
                table.innerHTML = " ";
                // table style
                let errorMessageRow = document.createElement('tr');
                errorMessageRow.style.textAlign = "center";
                errorMessageRow.style.fontStyle = "italic";
                errorMessageRow.innerHTML = '<td colspan="6">Loading Error<td>';
                table.appendChild(errorMessageRow);
            }
        })
        .then(data => {
            jsonArray.push(data);
            console.log(`jsonArray: ${jsonArray}`);
        })
        .catch(error => {
            console.error(error);
        });
}