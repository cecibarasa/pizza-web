$(function pizza() {
    let flavor = flavor;
    let size = size;
    let topping = topping;
    let crust = crust;
    let number = number;
})
var size = {
    regular: 500,
    medium: 800,
    large: 1000,
}
var topping = {
    onion = 100,
    tomato = 100,
    bacon = 200,
    mayo = 200,
    pineapple = 150,
    peper = 150,
    cheese = 200,
    mushroom = 200,
    sweetcorn = 250,
}
var crust = {
    glutten = 150,
    crispy = 100,
    stuffed = 200,
}
$(function pizza() {
    this.flavor = flavor;
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.number = number;
    this.totalPrice = [];

})

pizza.prototype.totalPrice = function(size, topping, crust) {
    return this.size * this.number + this.topping * this.number + this.crust * this.number;
}

pizza.prototype.newPizza = function() {
    return this.flavor + ", " + this.size + ", " + this.topping + ", " + this.crust + ", " + this.number + ", " + this.totalPrice;
}


//UI Logic
$(document).ready(function() {
    $("form#form").click(function() {
        $(".checkout").append('<div class="form-group">' +
            '<label for="flavor">Pick your pizza flavor</label>' +
            '<select class="flavor">' +
            '<option value="bbq">Barbeque Steak</option>' +
            '<option value="hawaiian">Hawaiian</option>' +
            '<option value="peperi">Chicken Peri Peri</option>' +
            '<option value="tikka">Chicken Tikka</option>' +
            '<option value="delux">Meat Delux</option>' +
            '<option value="veggi">Veggeterian Pizza</option>' +
            '<option value="boerwors">Boerwors</option>' +
            '<option value="macon">Chicken Macon Barbeque</option>' +
            '<option value="peperon">Beef Pepperoni</option>' +
            '<option value="cbpepperoni>Chicken and Beef Pepperoni</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="size">Choose your size</label>' +
            '<select class="size">' +
            '<option value="regular">Regular</option>' +
            '<option value="medium">Medium</option>' +
            '<option value="large">Large</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="topping">Choose your favorite toopings</label>' +
            '<option value="tomato">Tomato @100</option' +
            '<option value="onion">Onion @100</option' +
            '<option value="bacon">Bacon @200</option' +
            '<option value="pineapple">Pineapple @150</option' +
            '<option value="mayo">Mayonnaise @200</option' +
            '<option value="peper">Peper @150</option' +
            '<option value="cheese">Cheese @200</option' +
            '<option value="mushroom">Mushroom @200</option' +
            '<option value="sweetcorn">Sweetcorn @200</option' +
            '</select>' +
            '</div' > +
            '<div class="form-group">' +
            '<label for="crust">Pick your crust</label>' +
            '<select class="crust">' +
            '<option value="glutten">Glutten Free</option>' +
            '<option value="crispy">Cripy</option>' +
            '<option value="stuffed">Stuffed</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="number">Number of pizza</label>' +
            '<input type="number" class="form-control" id="number" placeholder="Number of pizza" min="1">' +
            '</input>' +
            '</div>');
        $("form#newPizza").submit(function(event) {
            event.preventDefault();
            $(".form-group").each(function() {
                var flavor = $(this).find("input.flavor").val();
                var size = $(this).find("input.size").val();
                var topping = $(this).find("input.topping").val();
                var crust = $(this).find("input.crust").val();
                var number = $(this).find("input#number").val();
                var newPizza = newPizza(inputtedFlavor, inputtedSize, inputtedTopping, inputtedCrust, inputtedNumber)
            })
        })

        function getFlavor() {
            var selectedValue = document.getElementsByClassName("flavor").val;
            return parseInt(selectedValue);

        }

        function getSize() {
            var selectedValue = document.getElementsByClassName("size").val;
            return parseInt(selectedValue);
        }

        function getTopping() {
            var selectedValue = document.getElementsByClassName("topping").val;
            return parseInt(selectedValue);
        }

        function getCrust() {
            var selectedValue = document.getElementsByClassName("crust").val;
            return parseInt(selectedValue);
        }

        function getNumber() {
            var selectedValue = document.getElementsById("number").val;
            return parseInt(selectedValue);
        }

        function getTotalAmount() {
            var totalAmount = (selectFlavor() + getCrust() + getSize() + getTopping() + getSize()) * getNumber();
            alert(" The total amount is " + (totalAmount) + "" + " Thank you for choosing us.");
        }

    });
})