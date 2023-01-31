let jsonArray = [];
let filtered = [];
let fixedArray = [];

function GetAll() {

    fetch('/Admin/FindDataOf')
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
            fixArray();
            setTable(fixedArray);
        })
        .catch(error => {
            console.error(error);
        });
}

function fixArray() {
    for (var j = 0; j < jsonArray[0].length; j++) {
        fixedArray.push(jsonArray[0][j]);
    }
}

function setTable(array) {
    const table = document.querySelector('#myTable tbody');
    table.innerHTML = '';
    if (array.length != 0) {
        for (var i = 0; i < array.length; i++) {

            if (array[i].in_category === null) {
                array[i].in_category = '';
            }
            if (array[i].in_type === null) {
                array[i].in_type = '';
            }
            if (array[i].in_size === null) {
                array[i].in_size = '';
            }

            var row = `<tr>`;
            row += `<td><label>${array[i].in_code}</label></td><td><label>${array[i].in_name}</label></td><td><label>${array[i].in_category}</label></td><td><label>${array[i].in_type}</label></td><td><label>${array[i].in_size}</label></td><td><label>${array[i].in_quantity}</label></td>`;
            row += `<td><div class="inventory-action-style">`;
            row += `<button class="edit-btn" title="EDIT SELECTED ITEM" onclick="openEditForm()"> <a href="#"><span class="lar la-edit"></span></a></button>`;
            row += `<button class="del-btn" title="DELETE SELECTED ITEM" onclick="canOpenPopup()"> <a href="#"><span class="lar la-trash-alt"></span></a></button>`;
            row += `<button class="pri-btn" title="PRINT REPORT" onclick="printOpenPopup()"> <a href="#"><span class="las la-print"></span></a></button>`;
            row += `<button class="expo-btn" title="EXPORT REPORT" onclick="expoOpenPopup()"> <a href="#"><span class="las la-file-download"></span></a></button>`;
            row += `</tr></div>`;
            row += `</tr>`;
            table.innerHTML += row;
        }

    }
    else {
        //error handler if input value not found
        table.innerHTML = " ";
        const errorMessageRow = document.createElement('tr');
        errorMessageRow.style.textAlign = "center";
        errorMessageRow.style.fontStyle = "italic";
        errorMessageRow.innerHTML = "<td colspan='6'>Item Not found<td>";
        //console.log(res.statusText);
        table.appendChild(errorMessageRow);
    }
}

function filterArray(value) {
    filtered.length = 0;
    for (var j = 0; j < fixedArray.length; j++) {
        if (JSON.stringify(fixedArray[j]).toLowerCase().includes(value)) {
            filtered.push(fixedArray[j]);
        }
    }
}

function SearchItem(value) {
    filterArray(value.toLowerCase());
    if (value == '') {
        setTable(fixedArray);
    } else {
        setTable(filtered);
    }
}

function SortByCategory(value) {
    const category = document.querySelector('#selcat');
    //document.getElementById("myDropdown").setAttribute("style","display:none;");
    if (value != '') {
        category.innerHTML = value;
        SearchItem(value.toLowerCase());
    }
    else {
        category.innerHTML = 'Select Category';
        setTable(fixedArray);
    }
}
