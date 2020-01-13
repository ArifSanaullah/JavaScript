/*Display a student record in table and each row should contain a delete button. btn should delete the student row when clicked.*/
//   var newRow = document.getElementById("tRow");
// console.log(newRow)
// function addRow(tableID) {
//   var table = document.getElementById(tableID);
//   var rowCount = table.rows.length;
//   var row = table.insertRow(rowCount);
//   var colCount = table.rows[0].cells.length;
//   var newRow = document.getElementById("tRow");

//   for (var i = 0; i < colCount; i++) {
//     var newcell = row.insertCell(i);
//     newcell.innerHTML = table.rows[0].cells[i].innerHTML;
//     console.log("First: ", newcell.childNodes);
//     switch (newcell.childNodes[0].type) {
//       case "text":
//         newcell.childNodes[0].value = "";
//         break;
//       case "checkbox":
//         newcell.childNodes[0].checked = false;
//         break;
//       case "select-one":
//         newcell.childNodes[0].selectedIndex = 0;
//         break;
//     }
//   }
// }

// function deleteRow(tableID) {
//   try {
//     var table = document.getElementById(tableID);
//     var rowCount = table.rows.length;
//     for (var i = 0; i < rowCount; i++) {
//       var row = table.rows[i];
//       var chkbox = row.cells[0].childNodes[0];
//       if (null != chkbox && true == chkbox.checked) {
//         if (rowCount <= 1) {
//           alert("Cannot delete all the rows.");
//           break;
//         }
//         table.deleteRow(i);
//         rowCount--;
//         i--;
//       }
//     }
//   } catch (e) {
//     alert(e);
//   }
// }


function delRow(className) {
  if (document.getElementsByClassName(className)) { //check if element exists or not
    var row = document.getElementsByClassName(className)[0];
    if (row.parentElement.parentElement.nodeName == "TABLE") { // check if element is child of any table or not
      row.parentNode.removeChild(row);
    }
  }
}