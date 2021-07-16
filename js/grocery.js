// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0,
        discount: 0
    },
    beauty: {
        value: 0,
        discount: 0
    },
    clothes: {
        value: 0,
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    cartList.push(products.indexOf(id - 1))
    console.log(cartList)

}

// Exercise 2
function cleanCart() {
    cartList = [];
    console.log("Arry limpio: " + cart)
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    let valorTotal = 0;
    let subtotalGrocery = 0;
    let subtotalBeauty = 0;
    let subtotalClothes = 0;
    let valor = 0;
    for (let product of cart) {
        let tipo = product.type;
        let precio = (product.price)
        let cantidad = (product.quantity)
        if (tipo == "clothes") {
            valor = precio * cantidad;
            subtotalClothes += valor;
        } else if (tipo == "beauty") {
            valor = precio * cantidad;
            subtotalBeauty += valor;
        } else if (tipo == "grocery") {
            valor = precio * cantidad;
            subtotalGrocery += valor;
        }
        valorTotal += valor;
    }
    subtotal.beauty.value = subtotalBeauty;
    subtotal.grocery.value = subtotalGrocery;
    subtotal.clothes.value = subtotalClothes;
    console.log("subtotalBeauty es: " + subtotalBeauty)
    console.log("subtotalGrocery es: " + subtotalGrocery)
    console.log("subtotalClothes es: " + subtotalClothes)

}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array

    let valorFinal = (subtotal.grocery.value + subtotal.beauty.value + subtotal.clothes.value) - (subtotal.grocery.discount + subtotal.beauty.discount + subtotal.clothes.discount)

    total = valorFinal
    console.log("El valor total es: " + " " + total)


}
// Exercise 5
function applyPromotionsSubtotals() {
    // - Si l'usuari compra més de 3 ampolles d'oli, el preu del producte descendeix a 10 euros.
    // - En comprar-se més de 10 mescles per a fer pastís, el seu preu es rebaixa a 2 / 3.


    for (let product of cart) {
        let discount1 = 0;
        let discount2 = 0;
        let promotion = product.name;
        if (promotion === 'cooking oil') {
            let a = product.quantity
            if (a > 3) {
                discount1 = (a * 0.5);
            }
        }
        else if (promotion === 'Instant cupcake mixture') {
            let a = product.quantity
            if (a > 10) {
                discount2 = (a * ((5 / 3) * 2));
            }
        }
        subtotal.grocery.discount = discount1 + discount2;
    }
    console.log(subtotal.grocery.discount)

}
//Exercise 6
function generateCart() {
    //Using the "cartlist" array that contains all the items in the shopping cart, 
    //generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the         quantity     of product.

    for (let product of cartList) {
        let nombre = product.name;
        let encontrado = false;

        for (let product2 of cart) {
            let nombre2 = product2.name
            if (nombre === nombre2) {
                let a = cart.indexOf(product2)
                cart[a].quantity += 1;
                encontrado = true;
            }

        }
        if (encontrado == false) {
            let a = cartList.indexOf(product)
            cartList[a].quantity = 1;
            cart.push(cartList[a]);

        }
    }
    console.log(cartList)
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let a = 0;
    let discount = 0;
    for (let product of cart) {
        let promotion = product.name;
        if (promotion == 'cooking oil') {
            a = product.quantity;
            if (a > 3) {
                discount = (product.price * product.quantity) - (0.5 * a)
                product.subtotalWithDiscount = discount;
                console.log("cooking oil subtotal con discount: " + product.subtotalWithDiscount)
            }
        }
        else if (promotion == 'Instant cupcake mixture') {
            a = product.quantity;
            if (a > 10) {
                discount = (product.price * product.quantity) - parseInt(a * ((5 / 3) * 2))
                product.subtotalWithDiscount = discount;
                console.log("Instant cupckake subtotal con discount: " + product.subtotalWithDiscount)
            }
        }
        else if ((promotion != 'Instant cupcake mixture') && (promotion != 'cooking oil')) {
            console.log("No aplica")
        }
    }




}

// Exercise 8
function addToCart(id) {
    // S'ha de modificar el programa, perquè quan l'usuari afegeixi un producte, no s'utilitzi la funció addToCartList(), en us lloc és preferible executar la funció addToCart(), la qual deu directament guardar els productes del carret en el array cart.

    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

    id = (id - 1);
    let seleccion = products[id];
    let encontrado = false;

    for (let product of cart) {
        let nombre = product.name;

        if (nombre == seleccion.name) {
            product.quantity += 1;
            encontrado = true;
        }
    }

    if (encontrado == false) {
        seleccion.quantity = 1;
        seleccion.subtotal = (seleccion.price * seleccion.quantity);
        seleccion.subtotalWithDiscount = 0;
        cart.push(seleccion);
    }




    calculateSubtotals()
    applyPromotionsCart()
    applyPromotionsSubtotals()
    calculateTotal()
    console.log("Ver My Cart")
}

// Exercise 9
function removeFromCart(id) {

    id = id - 1;
    let seleccion = products[id];
    let encontrado = false;

    for (let product in cart) {
        if (encontrado == false) {
            let name = seleccion.name;
            let nombre = cart[product].name;
            if ((name == nombre) && (cart[product].quantity > 1)) {
                cart[product].quantity = cart[product].quantity - 1
                encontrado = true;
            } else if ((name == nombre) && (cart[product].quantity == 1)) {
                cart.splice(product, 1)
                encontrado = true;
            }
        }
    }
    console.log("Carrito - producto: " + cart)
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let nombre = ""
    let precio = 0
    let cantidad = 0
    let subtotal = 0;
    let subDiscount = 0;
    let lista = document.querySelector(".list");
    lista.innerHTML = "";



    cart.forEach((element) => {
        const li = document.createElement("li");
        nombre = element.name;
        precio = element.price;
        subtotal = element.subtotal;
        subDiscount = element.subtotalWithDiscount;
        cantidad = element.quantity
        li.textContent = nombre + "/" + " Precio: " + precio + "/" + " Cantidad :" + cantidad + "/" + "Subtotal: " + subtotal + "/" + "Subtotal con descuento: " + subDiscount;
        lista.appendChild(li)
    })
}

