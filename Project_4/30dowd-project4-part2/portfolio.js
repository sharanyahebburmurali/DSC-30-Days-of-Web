var selectedRow = null;

function onFormSubmit(){
        var formData = readFormData();
        //to make sure none of the text inputs are empty
        if(!formData["fname"] || !formData["lname"] || !formData["email"] || !formData["contact"]){
            alert("Please fill all necessary details!");
            return;
        }
    if(selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){//reading data from the inputs
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["email"] = document.getElementById("email").value;
    formData["contact"] = document.getElementById("contact").value;
    return formData;
}

function insertNewRecord(data){//insertion of each row of input records
    var table = document.getElementById("display").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.contact;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)" class="fas fa-edit"></button>
    <button onClick="onDelete(this)" class="fas fa-trash"></button>`;
    

}
//causing input values to disapear from inputs once values are submitted
function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    selectedRow = null;
    
}
//users should be able to edit already existing records in case of mistakes
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
    //will return previously entered values to form inputs so users may edit values of their choice!

}

//causing input values to disapear from inputs once values are submitted
function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    selectedRow = null;
    
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.contact;
}

function onDelete(td){
    if (confirm('Are you sure you would like to delete this entry?')){
        row = td.parentElement.parentElement;
        document.getElementById("display").deleteRow(row.rowIndex);
        resetForm();
    }
}



















