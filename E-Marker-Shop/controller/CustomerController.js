import {CustomerModel} from "E-Marker-Shop/model/CustomerModel";
import {customer_db} from "E-Marker-Shop/db/db";

var row_index = null;

const clear = () => {
    $('#customer_Id').val('');
    $('#customer_Name').val('');
    $('#customer_Address').val('');
    $('#customer_Contact').val('');

}

const loadCustomerData = () => {
    $('#student-tbl-body').empty(); // make tbody empty
    customer_db.map((item, index) => {
        let record = `<tr><td class="Customer ID:">${item.customerId}</td><td class="Customer Name:">${item.customerName}</td> <td class="Customer Address:">${item.customerAddress}</td><td class="Customer Contact:">${item.customerContact}</tr>`;
        $("#student-tbl-body").append(record);
    });
};

// submit
$("#student-btns>button[type='button']").eq(0).on("click", () => {
    // collect data from the array
    let customerId =$('#customer_Id').val();
    let customerName=$('#customer_Name').val();
    let customerAddress=$('#customer_Address').val();
    let customerContact=$('#customer_Contact').val();

    let customer_obj = new CustomerModel(customerId,customerName,customerAddress,customerContact);

    // save in the db
    customer_db.push(customer_obj);

    // clear();
    $("#student-btns>button[type='reset']").click();

    // load student data
    loadCustomerData();


});

// update
$("#student-btns>button[type='button']").eq(1).on("click", () => {

    let customerId =$('#customer_Id').val();
    let customerName=$('#customer_Name').val();
    let customerAddress=$('#customer_Address').val();
    let customerContact=$('#customer_Contact').val();


    let customer_obj = new CustomerModel(customerId,customerName,customerAddress,customerContact);

    // find item index
    let index = customer_db.findIndex(item => item.customerId === customerId);

    // update item in the db
    customer_db[index] = customer_obj;

    // clear();
    $("#student-btns>button[type='reset']").click();

    // load student data
   loadCustomerData()
})

// delete
$("#student-btns>button[type='button']").eq(2).on("click", () => {
    let customerId = $("#customer_Id").val();

    // find item index
    let index = `<td class="Customer ID:">${customerId}</td><td class="Customer Name:">${customerName}</td> <td class="Customer Address:">${customerAddress}</td><td class="Customer Contact:">${customerContact}</td>`;

    // remove the item from the db
    customer_db.splice(index, 1);

    $("#student-btns>button[type='reset']").click();

    // load student data
    loadCustomerData();
})

$("#student-tbl-body").on("click", "tr", function() {
    row_index =$(this).index();

    // console.log(row_index);

    let customerId = $(this).find("td:eq(0)").text();
    let customerName = $(this).find("td:eq(1)").text();
    let customerAddress = $(this).find("td:eq(2)").text();
    let customerContact = $(this).find("td:eq(3)").text();

    $('#customer_Id').val(customerId);
    $('#customer_Name').val(customerName);
    $('#customer_Address').val(customerAddress);
    $('#customer_Contact').val(customerContact);
});


// //submit
// $("#submit").on('click', ()=>{
//     let customerId =$('#customer_Id').val();
//     let customerName=$('#customer_Name').val();
//     let customerAddress=$('#customer_Address').val();
//     let customerContact=$('#customer_Contact').val();
//
//     console.log('Customer ID: ' + customerId);
//     console.log('Customer Name: ' + customerName);
//     console.log('Customer Address: ' + customerAddress);
//     console.log('Customer Contact: ' + customerContact);
//
//
//     var newRow = $("<tr>");
//
//     newRow.append("<td>" + customerId + "</td>");
//     newRow.append("<td>" + customerName + "</td>");
//     newRow.append("<td>" + customerAddress + "</td>");
//     newRow.append("<td>" + customerContact + "</td>");
//
//     $("#student_table_body").append(newRow);
//
// })
//
// // update
// $("#update").on('click', ()=>{
//     let customerId =$('#customer_Id').val();
//     let customerName=$('#customer_Name').val();
//     let customerAddress=$('#customer_Address').val();
//     let customerContact=$('#customer_Contact').val();
//
//     let record = `<td class="Customer ID:">${customerId}</td><td class="Customer Name:">${customerName}</td> <td class="Customer Address:">${customerAddress}</td><td class="Customer Contact:">${customerContact}</td>`;
//
//     $("tbody>tr").eq(row_index).html(record)
// })
//
//
// //Delete
// $("#remove").on('click', () => {
//
//     $("tbody>tr").eq(row_index).remove();
// })
//
//
// //reset
// $("#reset").on('click', () => {
//     // my code
//     $('#customer_Id').val('');
//     $('#customer_Name').val('');
//     $('#customer_Address').val('');
//     $('#customer_Contact').val('');
//
// })
//
//
// //search
// $("#search").on('click', () => {
//     let customerId = $('#customer_Id').val();
//
//     $("tbody>tr").each(function () {
//         let row = $(this);
//         let currentCustomerId = row.find(".customer-id").text();
//
//         if (currentCustomerId === customerId) {
//             let customerName = row.find(".customer-name").text();
//             let customerAddress = row.find(".customer-address").text();
//             let customerContact = row.find(".customer-contact").text();
//
//             $('#customer_Name').val(customerName);
//             $('#customer_Address').val(customerAddress);
//             $('#customer_Contact').val(customerContact);
//
//             return true;
//         }
//     });
// });
//
//
// //click
// $("tbody").on("click", "tr", function () {
//     row_index =$(this).index();
//
//     let customerId = $(this).find("td:eq(0)").text();
//     let customerName = $(this).find("td:eq(1)").text();
//     let customerAddress = $(this).find("td:eq(2)").text();
//     let customerContact = $(this).find("td:eq(3)").text();
//
//     $('#customer_Id').val(customerId);
//     $('#customer_Name').val(customerName);
//     $('#customer_Address').val(customerAddress);
//     $('#customer_Contact').val(customerContact);
// });
//
//
//
