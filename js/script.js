$(document).ready(function() {
    $('.summary').hide();
    $('.cdata-overlay').hide();
    //inputs
    $("#submit").click(function() {
        let flavor = $(".flavor option:selected").val();
        let size = $(".size option:selected").val();
        let topping = $(".topping option:selected").val();
        let crust = $(".crust option:selected").val();
        let number = $("#number option:selected").val();

        //orders
        let price, totalPrice;
        switch (flavor) {
            case flavor = "bbq":
                switch (size) {
                    case size = regular:
                        price = 500;
                        if (crust === crispy) {
                            totalPrice = (price * number) + 150;
                        } else if (crust === glutten) {
                            totalPrice = (price * number) + 200;
                        } else if (crust === stuffed) {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = medium:
                        price = 800;
                        if (crust === crispy) {
                            totalPrice = (price * number) + 200;
                        } else if (crust === glutten) {
                            totalPrice = (price * number) + 250;
                        } else if (crust === stuffed) {
                            totalPrice = (price * number) + 200;
                        }
                        break;
                    case size = large:
                        price = 1000;
                        if (crust === crispy) {
                            totalPrice = (price * number) + 250;
                        } else if (crust === glutten) {
                            totalPrice = (price * number) + 300;
                        } else if (crust === stuffed) {
                            totalPrice = (price * number) + 250;
                        }
                    case flavor = "hawaiian":
                        switch (size) {
                            case size = regular:
                                price = 500;
                                if (crust === crispy) {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === glutten) {
                                    totalPrice = (price * number) + 200;
                                } else if (crust === stuffed) {
                                    totalPrice = (price * number) + 150;
                                }
                                break;
                            case size = medium:
                                price = 800;
                                if (crust === crispy) {
                                    totalPrice = (price * number) + 200;
                                } else if (crust === glutten) {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === stuffed) {
                                    totalPrice = (price * number) + 200;
                                }
                                break;
                            case size = large:
                                price = 1000;
                                if (crust === crispy) {
                                    totalPrice = (price * number) + 250;
                                } else if (crust === glutten) {
                                    totalPrice = (price * number) + 300;
                                } else if (crust === stuffed) {
                                    totalPrice = (price * number) + 250;
                                }
                            case flavor = "periperi":
                                switch (size) {
                                    case size = regular:
                                        price = 500;
                                        if (crust === crispy) {
                                            totalPrice = (price * number) + 150;
                                        } else if (crust === glutten) {
                                            totalPrice = (price * number) + 200;
                                        } else if (crust === stuffed) {
                                            totalPrice = (price * number) + 150;
                                        }
                                        break;
                                    case size = medium:
                                        price = 800;
                                        if (crust === crispy) {
                                            totalPrice = (price * number) + 200;
                                        } else if (crust === glutten) {
                                            totalPrice = (price * number) + 250;
                                        } else if (crust === stuffed) {
                                            totalPrice = (price * number) + 200;
                                        }
                                        break;
                                    case size = large:
                                        price = 1000;
                                        if (crust === crispy) {
                                            totalPrice = (price * number) + 250;
                                        } else if (crust === glutten) {
                                            totalPrice = (price * number) + 300;
                                        } else if (crust === stuffed) {
                                            totalPrice = (price * number) + 250;
                                        }
                                    case flavor = "tikka":
                                        switch (size) {
                                            case size = regular:
                                                price = 500;
                                                if (crust === crispy) {
                                                    totalPrice = (price * number) + 150;
                                                } else if (crust === glutten) {
                                                    totalPrice = (price * number) + 200;
                                                } else if (crust === stuffed) {
                                                    totalPrice = (price * number) + 150;
                                                }
                                                break;
                                            case size = medium:
                                                price = 800;
                                                if (crust === crispy) {
                                                    totalPrice = (price * number) + 200;
                                                } else if (crust === glutten) {
                                                    totalPrice = (price * number) + 250;
                                                } else if (crust === stuffed) {
                                                    totalPrice = (price * number) + 200;
                                                }
                                                break;
                                            case size = large:
                                                price = 1000;
                                                if (crust === crispy) {
                                                    totalPrice = (price * number) + 250;
                                                } else if (crust === glutten) {
                                                    totalPrice = (price * number) + 300;
                                                } else if (crust === stuffed) {
                                                    totalPrice = (price * number) + 250;
                                                }
                                            case flavor = "delux":
                                                switch (size) {
                                                    case size = regular:
                                                        price = 500;
                                                        if (crust === crispy) {
                                                            totalPrice = (price * number) + 150;
                                                        } else if (crust === glutten) {
                                                            totalPrice = (price * number) + 200;
                                                        } else if (crust === stuffed) {
                                                            totalPrice = (price * number) + 150;
                                                        }
                                                        break;
                                                    case size = medium:
                                                        price = 800;
                                                        if (crust === crispy) {
                                                            totalPrice = (price * number) + 200;
                                                        } else if (crust === glutten) {
                                                            totalPrice = (price * number) + 250;
                                                        } else if (crust === stuffed) {
                                                            totalPrice = (price * number) + 200;
                                                        }
                                                        break;
                                                    case size = large:
                                                        price = 1000;
                                                        if (crust === crispy) {
                                                            totalPrice = (price * number) + 250;
                                                        } else if (crust === glutten) {
                                                            totalPrice = (price * number) + 300;
                                                        } else if (crust === stuffed) {
                                                            totalPrice = (price * number) + 250;
                                                        }
                                                    case flavor = "bbq":
                                                        switch (size) {
                                                            case size = regular:
                                                                price = 500;
                                                                if (crust === crispy) {
                                                                    totalPrice = (price * number) + 150;
                                                                } else if (crust === glutten) {
                                                                    totalPrice = (price * number) + 200;
                                                                } else if (crust === stuffed) {
                                                                    totalPrice = (price * number) + 150;
                                                                }
                                                                break;
                                                            case size = medium:
                                                                price = 800;
                                                                if (crust === crispy) {
                                                                    totalPrice = (price * number) + 200;
                                                                } else if (crust === glutten) {
                                                                    totalPrice = (price * number) + 250;
                                                                } else if (crust === stuffed) {
                                                                    totalPrice = (price * number) + 200;
                                                                }
                                                                break;
                                                            case size = large:
                                                                price = 1000;
                                                                if (crust === crispy) {
                                                                    totalPrice = (price * number) + 250;
                                                                } else if (crust === glutten) {
                                                                    totalPrice = (price * number) + 300;
                                                                } else if (crust === stuffed) {
                                                                    totalPrice = (price * number) + 250;
                                                                }
                                                            case flavor = "vegi":
                                                                switch (size) {
                                                                    case size = regular:
                                                                        price = 500;
                                                                        if (crust === crispy) {
                                                                            totalPrice = (price * number) + 150;
                                                                        } else if (crust === glutten) {
                                                                            totalPrice = (price * number) + 200;
                                                                        } else if (crust === stuffed) {
                                                                            totalPrice = (price * number) + 150;
                                                                        }
                                                                        break;
                                                                    case size = medium:
                                                                        price = 800;
                                                                        if (crust === crispy) {
                                                                            totalPrice = (price * number) + 200;
                                                                        } else if (crust === glutten) {
                                                                            totalPrice = (price * number) + 250;
                                                                        } else if (crust === stuffed) {
                                                                            totalPrice = (price * number) + 200;
                                                                        }
                                                                        break;
                                                                    case size = large:
                                                                        price = 1000;
                                                                        if (crust === crispy) {
                                                                            totalPrice = (price * number) + 250;
                                                                        } else if (crust === glutten) {
                                                                            totalPrice = (price * number) + 300;
                                                                        } else if (crust === stuffed) {
                                                                            totalPrice = (price * number) + 250;
                                                                        }
                                                                    case flavor = "borewors":
                                                                        switch (size) {
                                                                            case size = regular:
                                                                                price = 500;
                                                                                if (crust === crispy) {
                                                                                    totalPrice = (price * number) + 150;
                                                                                } else if (crust === glutten) {
                                                                                    totalPrice = (price * number) + 200;
                                                                                } else if (crust === stuffed) {
                                                                                    totalPrice = (price * number) + 150;
                                                                                }
                                                                                break;
                                                                            case size = medium:
                                                                                price = 800;
                                                                                if (crust === crispy) {
                                                                                    totalPrice = (price * number) + 200;
                                                                                } else if (crust === glutten) {
                                                                                    totalPrice = (price * number) + 250;
                                                                                } else if (crust === stuffed) {
                                                                                    totalPrice = (price * number) + 200;
                                                                                }
                                                                                break;
                                                                            case size = large:
                                                                                price = 1000;
                                                                                if (crust === crispy) {
                                                                                    totalPrice = (price * number) + 250;
                                                                                } else if (crust === glutten) {
                                                                                    totalPrice = (price * number) + 300;
                                                                                } else if (crust === stuffed) {
                                                                                    totalPrice = (price * number) + 250;
                                                                                }
                                                                            case flavor = "macon":
                                                                                switch (size) {
                                                                                    case size = regular:
                                                                                        price = 500;
                                                                                        if (crust === crispy) {
                                                                                            totalPrice = (price * number) + 150;
                                                                                        } else if (crust === glutten) {
                                                                                            totalPrice = (price * number) + 200;
                                                                                        } else if (crust === stuffed) {
                                                                                            totalPrice = (price * number) + 150;
                                                                                        }
                                                                                        break;
                                                                                    case size = medium:
                                                                                        price = 800;
                                                                                        if (crust === crispy) {
                                                                                            totalPrice = (price * number) + 200;
                                                                                        } else if (crust === glutten) {
                                                                                            totalPrice = (price * number) + 250;
                                                                                        } else if (crust === stuffed) {
                                                                                            totalPrice = (price * number) + 200;
                                                                                        }
                                                                                        break;
                                                                                    case size = large:
                                                                                        price = 1000;
                                                                                        if (crust === crispy) {
                                                                                            totalPrice = (price * number) + 250;
                                                                                        } else if (crust === glutten) {
                                                                                            totalPrice = (price * number) + 300;
                                                                                        } else if (crust === stuffed) {
                                                                                            totalPrice = (price * number) + 250;
                                                                                        }
                                                                                    case flavor = "bbq":
                                                                                        switch (size) {
                                                                                            case size = regular:
                                                                                                price = 500;
                                                                                                if (crust === crispy) {
                                                                                                    totalPrice = (price * number) + 150;
                                                                                                } else if (crust === glutten) {
                                                                                                    totalPrice = (price * number) + 200;
                                                                                                } else if (crust === stuffed) {
                                                                                                    totalPrice = (price * number) + 150;
                                                                                                }
                                                                                                break;
                                                                                            case size = medium:
                                                                                                price = 800;
                                                                                                if (crust === crispy) {
                                                                                                    totalPrice = (price * number) + 200;
                                                                                                } else if (crust === glutten) {
                                                                                                    totalPrice = (price * number) + 250;
                                                                                                } else if (crust === stuffed) {
                                                                                                    totalPrice = (price * number) + 200;
                                                                                                }
                                                                                                break;
                                                                                            case size = large:
                                                                                                price = 1000;
                                                                                                if (crust === crispy) {
                                                                                                    totalPrice = (price * number) + 250;
                                                                                                } else if (crust === glutten) {
                                                                                                    totalPrice = (price * number) + 300;
                                                                                                } else if (crust === stuffed) {
                                                                                                    totalPrice = (price * number) + 250;
                                                                                                }
                                                                                            case flavor = "peperon":
                                                                                                switch (size) {
                                                                                                    case size = regular:
                                                                                                        price = 500;
                                                                                                        if (crust === crispy) {
                                                                                                            totalPrice = (price * number) + 150;
                                                                                                        } else if (crust === glutten) {
                                                                                                            totalPrice = (price * number) + 200;
                                                                                                        } else if (crust === stuffed) {
                                                                                                            totalPrice = (price * number) + 150;
                                                                                                        }
                                                                                                        break;
                                                                                                    case size = medium:
                                                                                                        price = 800;
                                                                                                        if (crust === crispy) {
                                                                                                            totalPrice = (price * number) + 200;
                                                                                                        } else if (crust === glutten) {
                                                                                                            totalPrice = (price * number) + 250;
                                                                                                        } else if (crust === stuffed) {
                                                                                                            totalPrice = (price * number) + 200;
                                                                                                        }
                                                                                                        break;
                                                                                                    case size = large:
                                                                                                        price = 1000;
                                                                                                        if (crust === crispy) {
                                                                                                            totalPrice = (price * number) + 250;
                                                                                                        } else if (crust === glutten) {
                                                                                                            totalPrice = (price * number) + 300;
                                                                                                        } else if (crust === stuffed) {
                                                                                                            totalPrice = (price * number) + 250;
                                                                                                        }
                                                                                                    case flavor = "cbpepperoni":
                                                                                                        switch (size) {
                                                                                                            case size = regular:
                                                                                                                price = 500;
                                                                                                                if (crust === crispy) {
                                                                                                                    totalPrice = (price * number) + 150;
                                                                                                                } else if (crust === glutten) {
                                                                                                                    totalPrice = (price * number) + 200;
                                                                                                                } else if (crust === stuffed) {
                                                                                                                    totalPrice = (price * number) + 150;
                                                                                                                }
                                                                                                                break;
                                                                                                            case size = medium:
                                                                                                                price = 800;
                                                                                                                if (crust === crispy) {
                                                                                                                    totalPrice = (price * number) + 200;
                                                                                                                } else if (crust === glutten) {
                                                                                                                    totalPrice = (price * number) + 250;
                                                                                                                } else if (crust === stuffed) {
                                                                                                                    totalPrice = (price * number) + 200;
                                                                                                                }
                                                                                                                break;
                                                                                                            case size = large:
                                                                                                                price = 1000;
                                                                                                                if (crust === crispy) {
                                                                                                                    totalPrice = (price * number) + 250;
                                                                                                                } else if (crust === glutten) {
                                                                                                                    totalPrice = (price * number) + 300;
                                                                                                                } else if (crust === stuffed) {
                                                                                                                    totalPrice = (price * number) + 250;
                                                                                                                }
                                                                                                                break;
                                                                                                        }
                                                                                                        switch (topping) {
                                                                                                            case topping = tomato:
                                                                                                                totalPrice = totalPrice + 100;
                                                                                                                break;
                                                                                                            case topping = onion:
                                                                                                                totalPrice = totalPrice + 100;
                                                                                                                break;
                                                                                                            case topping = bacon:
                                                                                                                totalPrice = totalPrice + 150;
                                                                                                                break;
                                                                                                            case topping = pineapple:
                                                                                                                totalPrice = totalPrice + 100;
                                                                                                                break;
                                                                                                            case topping = mayo:
                                                                                                                totalPrice = totalPrice + 150;
                                                                                                                break;
                                                                                                            case topping = cheese:
                                                                                                                totalPrice = totalPrice + 200;
                                                                                                                break;
                                                                                                            case topping = pepper:
                                                                                                                totalPrice = totalPrice + 200;
                                                                                                                break;
                                                                                                            case topping = mushroom:
                                                                                                                totalPrice = totalPrice + 100;
                                                                                                                break;
                                                                                                            case topping = sweetcorn:
                                                                                                                totalPrice = totalPrice + 250;
                                                                                                                break;
                                                                                                        };

                                                                                                }
                                                                                        }
                                                                                }
                                                                        }
                                                                }
                                                        }
                                                }
                                        }
                                }
                        }

                }
        }

    })

})