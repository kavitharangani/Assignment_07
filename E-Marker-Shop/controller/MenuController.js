$('#menu-section').css('display', 'block');
$('#manage_customer').css('display', 'none');
$('#manage_item').css('display', 'none');
$('#manage_order').css('display', 'none');

$('#home-nav').on('click', () => {
    $('#menu-section').css('display', 'block');
    $('#manage_customer').css('display', 'none');
    $('#manage_item').css('display', 'none');
    $('#manage_order').css('display', 'none');
})

$('#customer-nav').on('click', () => {
    $('#menu-section').css('display', 'none');
    $('#manage_customer').css('display', 'block');
    $('#manage_item').css('display', 'none');
    $('#manage_order').css('display', 'none');
})


$('#item-nav').on('click', () => {
    $('#manage_item').css('display', 'block');
    $('#menu-section').css('display', 'none');
    $('#manage_customer').css('display', 'none');
    $('#manage_order').css('display', 'none');
})


$('#order-nav').on('click', () => {
    $('#manage_order').css('display', 'block');
    $('#menu-section').css('display', 'none');
    $('#manage_customer').css('display', 'none');
    $('#manage_item').css('display', 'none');
})