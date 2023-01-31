let jsonArray = [];
let filtered = [];
let fixedArray = [];
const table = document.querySelector('#myTable tbody');

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
            if (table !== null) {
                setTable(fixedArray);
            }
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

function setField(value) {
    let name = document.querySelector('#itemName');
    let size = document.querySelector('#itemSize');
    let quantity = document.querySelector('#itemQuant');
    let cat = document.getElementById("cat-select");
    let type = document.getElementById("type-select");

    for (var i = 0; i < fixedArray.length; i++) {
        if (fixedArray[i].in_code == value) {
            filtered.length = 0;
            filtered.push(fixedArray[i]);
        }
    }
    name.value = filtered[0].in_name;
    size.value = filtered[0].in_size;
    quantity.value = filtered[0].in_quantity;

    // loop through all the options in the select element
    for (let i = 0; i < cat.options.length; i++) {
        let option = cat.options[i];
        // check if the option value exists in the valuesToCompare array
        if (filtered[0].in_category === option.value) {
            cat.selectedIndex = i;
        }
    }

    for (let i = 0; i < type.options.length; i++) {
        let option = type.options[i];
        // check if the option value exists in the valuesToCompare array
        if (filtered[0].in_type === option.value) {
            type.selectedIndex = i;
        } 
    }
    console.log(`size val : ${size.value}`);
}