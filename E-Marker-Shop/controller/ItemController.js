
//submit
$("#submit1").on('click', ()=>{
    let itemCode =$('#item_Code').val();
    let itemName=$('#item_Name').val();
    let itemPrice=$('#item_Price').val();
    let qty=$('#qty').val();

    console.log('Item ID: ' + itemCode);
    console.log('Item Name: ' + itemName);
    console.log('Item price: ' + itemPrice);
    console.log('Item qty: ' + qty);


    var newRow = $("<tr>");

    newRow.append("<td>" + itemCode + "</td>");
    newRow.append("<td>" + itemName + "</td>");
    newRow.append("<td>" + itemPrice + "</td>");
    newRow.append("<td>" + qty + "</td>");

    $("#item_table_body").append(newRow);

})

// update
$("#update1").on('click', ()=>{
    let itemCode =$('#item_Code').val();
    let itemName=$('#item_Name').val();
    let itemPrice=$('#item_Price').val();
    let qty=$('#qty').val();

    let record = `<td class="Item Code:">${itemCode}</td><td class="Item Name:">${itemName}</td> <td class="Item Price:">${itemPrice}</td><td class="Qty On Hand:">${qty}</td>`;

    $("#item_table_body>tr").eq(row_index).html(record)
})


//Delete
$("#remove1").on('click', () => {

    $("#item_table_body>tr").eq(row_index).remove();
})


//reset
$("#reset1").on('click', () => {
    // my code
    $('#item_Code').val('');
    $('#item_Name').val('');
    $('#item_Price').val('');
    $('#qty').val('');

})

//click
$("#item_table_body").on("click", "tr", function () {
    row_index =$(this).index();

    let itemCode = $(this).find("td:eq(0)").text();
    let itemName = $(this).find("td:eq(1)").text();
    let itemPrice = $(this).find("td:eq(2)").text();
    let qty = $(this).find("td:eq(3)").text();

    $('#item_Code').val(itemCode);
    $('#item_Name').val(itemName);
    $('#item_Price').val(itemPrice);
    $('#qty').val(qty);
});
