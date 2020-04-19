$('#orders').on('submit', function() {
    var size = {
        regular: 500,
        medium: 800,
        large: 1000
    };

    var topping = {
        onions: 100,
        tomato: 100,
        macon: 200,
        mushroom: 200,
        greenpepper: 150,
        pineapple: 150,
        sweetcorn: 200,
        mince: 200,
        beef: 250,
        chicken: 250

    };

    var crust = {
        thin: 150,
        thick: 100,
        custom: 200
    };

    var flavours = $('select#flavor option:checked').val();
    var flavourCost = 1000;
    var _size = $('select#size option:checked').val();
    var _crust = $('select#crust option:checked').val();
    var _topping = $('select#toppings option:checked').val();
    var _numberOfPizzas = $('input#numberOfPizzas').val();
    var delivery = $('input[type=radio][name=delivery]:checked').val();


    //var delivery = $('select')

    var subTotal = flavourCost + size[_size] + crust[_crust] + topping[_topping] * _numberOfPizzas;

    var total = subTotal + name[delivery];


    /*console.log(flavours);
    console.log('size: ', _size);
    console.log('crust: ', _crust);
    console.log('topping: ', _topping);
    console.log(subTotal);
    console.log(total);
    console.log(deliveries);*/


    var mylist = $('#orders').val();
    $('#list').append(`<li>${flavours}<br> ${_size}<br>${_crust}<br> ${_topping}<br>${subTotal}</li>`);
    return false


});
$(function() {
    $('.deliver').click(function() {
        $('.customerdata').show();
        var mylist = $('#orders').val();
        $('#list').append(`<li>${flavours}<br>${flavourCost}<br> ${_size}<br>${_crust}<br> ${_topping}<br>${total}</li>`);
        return false

    });
    $('.customerdata').hide();
})
$('.delivernot').click(function() {
    $('.customerdata').hide();

});

$("#form").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let phone = $("#phone").val();
    let location = $("#location").val();

    if ($("#name").val() && $("#phone").val() && $("#location")) {
        alert("Hey " + name + ", " + " Your delivery is on the way to" + "  " + location)
    } else {
        alert("Please provide your correct name and location");
    }
    $('#form').each(function() {
        this.reset();
    });


});