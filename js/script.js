$(function pizza(pizza) {
    this.pizza = pizza;
    this.flavor = [];

})

function flavor(size, topping, crust, number) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.number = number;

}
var size = {
    regurlar: "500",
    medium: "800",
    large: "1000",
}
var topping = {
    tomato: "100",
    onion: "100",
    bacon: "200",
    pineapple: "150",
    mayo: "200",
    cheese: "200",
    pepper: "150",
    mushroom: "200",
    sweetcorn: "200",
}
var crust = {
    crispy: "100",
    glutten: "200",
    stuffed: "150"
};

//UI Logic
$(document).ready(function() {
    $("#submit").click(function() {
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

        function getCrust() {
            var selectedCrust = document.getElementById("crust").value;
            return parseInt(selectedCrust);
        }

        function getToppings() {
            var selectedToppings = document.getElementById("topping").value;
            return parseInt(selectedToppings);
        }

        function getSize() {
            var sise = document.getElementById("size").value;
            return parseInt(size);
        }

        function selectPizza() {
            var pizza = document.getElementById("flavor").value;
            return parseInt(pizza);
        }

        function getNumber() {
            var selectedNumber = document.getElementById("number").value;
            return parseInt(selectedNumber);
        }

        function getTotalAmount() {
            var totalAmount = (selectPizza() + getSize() + getCrust() + getSize() + getToppings()) * getNumber();
            alert(" The total amount is " + (totalAmount) + "" + " Thank you for choosing us.");
        }
    })
})