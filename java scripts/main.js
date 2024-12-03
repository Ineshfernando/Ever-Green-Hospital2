//1st product Java Script
// Get references to interactive elements
const addToCartButton = document.getElementById('addToCart');
const addToFavoritesButton = document.getElementById('addToFavorites');
const applyFavoriteButton = document.getElementById('applyFavorite');
const quantityInput = document.getElementById('quantity');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const cartItems = document.getElementById('cartItems'); // Cart display element
const totalCost = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton.addEventListener('click', handleAddToCart);
addToFavoritesButton.addEventListener('click', handleAddToFavorites);
applyFavoriteButton.addEventListener('click', handleApplyFavorite);
quantityInput.addEventListener('input', updatePriceBasedOnQuantity); // Listen for quantity changes

// Variables available to all code
let cart = [];
let favorites = [];
const basePrice = 3.99; // Base price of the product

// Initialize default values
productName.innerText = 'Paracetamol';
productPrice.innerText = `$${basePrice.toFixed(2)}`;

// Implement event handlers
function handleAddToCart() {
    const quantity = parseInt(quantityInput.value);
    addToCart(productName.innerText, basePrice, quantity); // Use addToCart function

    const productTotal = basePrice * quantity;
    console.log('Added to cart:', { name: productName.innerText, price: basePrice, quantity, total: productTotal });
    alert(`Added to cart: ${productName.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites() {
    const quantity = parseInt(quantityInput.value);
    const favorite = { name: productName.innerText, price: basePrice, quantity };

    localStorage.setItem('favoriteOrder', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}

// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

function handleApplyFavorite() {
    const savedFavorite = localStorage.getItem('favoriteOrder');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}

function updatePriceBasedOnQuantity() {
    const quantity = parseInt(quantityInput.value);
    const total = basePrice * quantity;
    productPrice.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//2nd product Java Script
// Get references to interactive elements
const addToCartButton1 = document.getElementById('addToCart1');
const addToFavoritesButton1 = document.getElementById('addToFavorites1');
const applyFavoriteButton1 = document.getElementById('applyFavorite1');
const quantityInput1 = document.getElementById('quantity1');
const productName1 = document.getElementById('productName1');
const productPrice1 = document.getElementById('productPrice1');
const cartItems1 = document.getElementById('cartItems'); // Cart display element
const totalCost1 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton1.addEventListener('click', handleAddToCart1);
addToFavoritesButton1.addEventListener('click', handleAddToFavorites1);
applyFavoriteButton1.addEventListener('click', handleApplyFavorite1);
quantityInput1.addEventListener('input', updatePriceBasedOnQuantity1); // Listen for quantity changes

// Variables available to all code
let cart1 = [];
let favorites1 = [];
const basePrice1 = 5.99; // Base price of the product

// Initialize default values
productName1.innerText = 'Ibuprofen';
productPrice1.innerText = `$${basePrice1.toFixed(2)}`;

// Implement event handlers
function handleAddToCart1() {
    const quantity = parseInt(quantityInput1.value);
    addToCart1(productName1.innerText, basePrice1, quantity); // Use addToCart1 function

    const productTotal = basePrice1 * quantity;
    console.log('Added to cart:', { name: productName1.innerText, price: basePrice1, quantity, total: productTotal });
    alert(`Added to cart: ${productName1.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites1() {
    const quantity = parseInt(quantityInput1.value);
    const favorite = { name: productName1.innerText, price: basePrice1, quantity };

    localStorage.setItem('favoriteOrder1', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice1(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite1() {
    const savedFavorite = localStorage.getItem('favoriteOrder1');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput1.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}

function updatePriceBasedOnQuantity1() {
    const quantity = parseInt(quantityInput1.value);
    const total = basePrice1 * quantity;
    productPrice1.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart1(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//3rd product Java Script
// Get references to interactive elements
const addToCartButton2 = document.getElementById('addToCart2');
const addToFavoritesButton2 = document.getElementById('addToFavorites2');
const applyFavoriteButton2 = document.getElementById('applyFavorite2');
const quantityInput2 = document.getElementById('quantity2');
const productName2 = document.getElementById('productName2');
const productPrice2 = document.getElementById('productPrice2');
const cartItems2 = document.getElementById('cartItems'); // Cart display element
const totalCost2 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton2.addEventListener('click', handleAddToCart2);
addToFavoritesButton2.addEventListener('click', handleAddToFavorites2);
applyFavoriteButton2.addEventListener('click', handleApplyFavorite2);
quantityInput2.addEventListener('input', updatePriceBasedOnQuantity2); // Listen for quantity changes

// Variables available to all code
let cart2 = [];
let favorites2 = [];
const basePrice2 = 7.99; // Base price of the product

// Initialize default values
productName2.innerText = 'Aspirin';
productPrice2.innerText = `$${basePrice2.toFixed(2)}`;

// Implement event handlers
function handleAddToCart2() {
    const quantity = parseInt(quantityInput2.value);
    addToCart2(productName2.innerText, basePrice2, quantity); // Use addToCart2 function

    const productTotal = basePrice2 * quantity;
    console.log('Added to cart:', { name: productName2.innerText, price: basePrice2, quantity, total: productTotal });
    alert(`Added to cart: ${productName2.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites2() {
    const quantity = parseInt(quantityInput2.value);
    const favorite = { name: productName2.innerText, price: basePrice2, quantity };

    localStorage.setItem('favoriteOrder2', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice2(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite2() {
    const savedFavorite = localStorage.getItem('favoriteOrder2');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput2.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity2() {
    const quantity = parseInt(quantityInput2.value);
    const total = basePrice2 * quantity;
    productPrice2.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart2(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//4th product Java Script
// Get references to interactive elements
const addToCartButton3 = document.getElementById('addToCart3');
const addToFavoritesButton3 = document.getElementById('addToFavorites3');
const applyFavoriteButton3 = document.getElementById('applyFavorite3');
const quantityInput3 = document.getElementById('quantity3');
const productName3 = document.getElementById('productName3');
const productPrice3 = document.getElementById('productPrice3');
const cartItems3 = document.getElementById('cartItems'); // Cart display element
const totalCost3 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton3.addEventListener('click', handleAddToCart3);
addToFavoritesButton3.addEventListener('click', handleAddToFavorites3);
applyFavoriteButton3.addEventListener('click', handleApplyFavorite3);
quantityInput3.addEventListener('input', updatePriceBasedOnQuantity3); // Listen for quantity changes

// Variables available to all code
let cart3 = [];
let favorites3 = [];
const basePrice3 = 1.99; // Base price of the product

// Initialize default values
productName3.innerText = 'Naproxen';
productPrice3.innerText = `$${basePrice3.toFixed(2)}`;

// Implement event handlers
function handleAddToCart3() {
    const quantity = parseInt(quantityInput3.value);
    addToCart3(productName3.innerText, basePrice3, quantity); // Use addToCart3 function

    const productTotal = basePrice3 * quantity;
    console.log('Added to cart:', { name: productName3.innerText, price: basePrice3, quantity, total: productTotal });
    alert(`Added to cart: ${productName3.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites3() {
    const quantity = parseInt(quantityInput3.value);
    const favorite = { name: productName3.innerText, price: basePrice3, quantity };

    localStorage.setItem('favoriteOrder3', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice3(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite3() {
    const savedFavorite = localStorage.getItem('favoriteOrder3');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput3.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}



function updatePriceBasedOnQuantity3() {
    const quantity = parseInt(quantityInput3.value);
    const total = basePrice3 * quantity;
    productPrice3.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart3(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//5th product Java Script
// Get references to interactive elements
const addToCartButton4 = document.getElementById('addToCart4');
const addToFavoritesButton4 = document.getElementById('addToFavorites4');
const applyFavoriteButton4 = document.getElementById('applyFavorite4');
const quantityInput4 = document.getElementById('quantity4');
const productName4 = document.getElementById('productName4');
const productPrice4 = document.getElementById('productPrice4');
const cartItems4 = document.getElementById('cartItems'); // Cart display element
const totalCost4 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton4.addEventListener('click', handleAddToCart4);
addToFavoritesButton4.addEventListener('click', handleAddToFavorites4);
applyFavoriteButton4.addEventListener('click', handleApplyFavorite4);
quantityInput4.addEventListener('input', updatePriceBasedOnQuantity4); // Listen for quantity changes

// Variables available to all code
let cart4 = [];
let favorites4 = [];
const basePrice4 = 4.99; // Base price of the product

// Initialize default values
productName4.innerText = 'Morphine';
productPrice4.innerText = `$${basePrice4.toFixed(2)}`;

// Implement event handlers
function handleAddToCart4() {
    const quantity = parseInt(quantityInput4.value);
    addToCart4(productName4.innerText, basePrice4, quantity); // Use addToCart4 function

    const productTotal = basePrice4 * quantity;
    console.log('Added to cart:', { name: productName4.innerText, price: basePrice4, quantity, total: productTotal });
    alert(`Added to cart: ${productName4.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites4() {
    const quantity = parseInt(quantityInput4.value);
    const favorite = { name: productName4.innerText, price: basePrice4, quantity };

    localStorage.setItem('favoriteOrder4', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice4(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite4() {
    const savedFavorite = localStorage.getItem('favoriteOrder4');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput4.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity4() {
    const quantity = parseInt(quantityInput4.value);
    const total = basePrice4 * quantity;
    productPrice4.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart4(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//6th product Java Script
// Get references to interactive elements
const addToCartButton5 = document.getElementById('addToCart5');
const addToFavoritesButton5 = document.getElementById('addToFavorites5');
const applyFavoriteButton5 = document.getElementById('applyFavorite5');
const quantityInput5 = document.getElementById('quantity5');
const productName5 = document.getElementById('productName5');
const productPrice5 = document.getElementById('productPrice5');
const cartItems5 = document.getElementById('cartItems'); // Cart display element
const totalCost5 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton5.addEventListener('click', handleAddToCart5);
addToFavoritesButton5.addEventListener('click', handleAddToFavorites5);
applyFavoriteButton5.addEventListener('click', handleApplyFavorite5);
quantityInput5.addEventListener('input', updatePriceBasedOnQuantity5); // Listen for quantity changes

// Variables available to all code
let cart5 = [];
let favorites5 = [];
const basePrice5 = 5.99; // Base price of the product

// Initialize default values
productName5.innerText = 'Tramadol';
productPrice5.innerText = `$${basePrice5.toFixed(2)}`;

// Implement event handlers
function handleAddToCart5() {
    const quantity = parseInt(quantityInput5.value);
    addToCart5(productName5.innerText, basePrice5, quantity); // Use addToCart5 function

    const productTotal = basePrice5 * quantity;
    console.log('Added to cart:', { name: productName5.innerText, price: basePrice5, quantity, total: productTotal });
    alert(`Added to cart: ${productName5.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites5() {
    const quantity = parseInt(quantityInput5.value);
    const favorite = { name: productName5.innerText, price: basePrice5, quantity };

    localStorage.setItem('favoriteOrder5', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice5(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite5() {
    const savedFavorite = localStorage.getItem('favoriteOrder5');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput5.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity5() {
    const quantity = parseInt(quantityInput5.value);
    const total = basePrice5 * quantity;
    productPrice5.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart5(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//7th product Java Script
// Get references to interactive elements
const addToCartButton6 = document.getElementById('addToCart6');
const addToFavoritesButton6 = document.getElementById('addToFavorites6');
const applyFavoriteButton6 = document.getElementById('applyFavorite6');
const quantityInput6 = document.getElementById('quantity6');
const productName6 = document.getElementById('productName6');
const productPrice6 = document.getElementById('productPrice6');
const cartItems6 = document.getElementById('cartItems'); // Cart display element
const totalCost6 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton6.addEventListener('click', handleAddToCart6);
addToFavoritesButton6.addEventListener('click', handleAddToFavorites6);
applyFavoriteButton6.addEventListener('click', handleApplyFavorite6);
quantityInput6.addEventListener('input', updatePriceBasedOnQuantity6); // Listen for quantity changes

// Variables available to all code
let cart6 = [];
let favorites6 = [];
const basePrice6 = 1.99; // Base price of the product

// Initialize default values
productName6.innerText = 'Amoxicillin';
productPrice6.innerText = `$${basePrice6.toFixed(2)}`;

// Implement event handlers
function handleAddToCart6() {
    const quantity = parseInt(quantityInput6.value);
    addToCart6(productName6.innerText, basePrice6, quantity); // Use addToCart6 function

    const productTotal = basePrice6 * quantity;
    console.log('Added to cart:', { name: productName6.innerText, price: basePrice6, quantity, total: productTotal });
    alert(`Added to cart: ${productName6.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites6() {
    const quantity = parseInt(quantityInput6.value);
    const favorite = { name: productName6.innerText, price: basePrice6, quantity };

    localStorage.setItem('favoriteOrder6', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice6(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite6() {
    const savedFavorite = localStorage.getItem('favoriteOrder6');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput6.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity6() {
    const quantity = parseInt(quantityInput6.value);
    const total = basePrice6 * quantity;
    productPrice6.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart6(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//8th product Java Script
// Get references to interactive elements
const addToCartButton7 = document.getElementById('addToCart7');
const addToFavoritesButton7 = document.getElementById('addToFavorites7');
const applyFavoriteButton7 = document.getElementById('applyFavorite7');
const quantityInput7 = document.getElementById('quantity7');
const productName7 = document.getElementById('productName7');
const productPrice7 = document.getElementById('productPrice7');
const cartItems7 = document.getElementById('cartItems'); // Cart display element
const totalCost7 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton7.addEventListener('click', handleAddToCart7);
addToFavoritesButton7.addEventListener('click', handleAddToFavorites7);
applyFavoriteButton7.addEventListener('click', handleApplyFavorite7);
quantityInput7.addEventListener('input', updatePriceBasedOnQuantity7); // Listen for quantity changes

// Variables available to all code
let cart7 = [];
let favorites7 = [];
const basePrice7 = 4.99; // Base price of the product

// Initialize default values
productName7.innerText = 'Azithromycin';
productPrice7.innerText = `$${basePrice7.toFixed(2)}`;

// Implement event handlers
function handleAddToCart7() {
    const quantity = parseInt(quantityInput7.value);
    addToCart7(productName7.innerText, basePrice7, quantity); // Use addToCart7 function

    const productTotal = basePrice7 * quantity;
    console.log('Added to cart:', { name: productName7.innerText, price: basePrice7, quantity, total: productTotal });
    alert(`Added to cart: ${productName7.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites7() {
    const quantity = parseInt(quantityInput7.value);
    const favorite = { name: productName7.innerText, price: basePrice7, quantity };

    localStorage.setItem('favoriteOrder7', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice7(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite7() {
    const savedFavorite = localStorage.getItem('favoriteOrder7');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput7.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity7() {
    const quantity = parseInt(quantityInput7.value);
    const total = basePrice7 * quantity;
    productPrice7.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart7(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//9th product Java Script
// Get references to interactive elements
const addToCartButton8 = document.getElementById('addToCart8');
const addToFavoritesButton8 = document.getElementById('addToFavorites8');
const applyFavoriteButton8 = document.getElementById('applyFavorite8');
const quantityInput8 = document.getElementById('quantity8');
const productName8 = document.getElementById('productName8');
const productPrice8 = document.getElementById('productPrice8');
const cartItems8 = document.getElementById('cartItems'); // Cart display element
const totalCost8 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton8.addEventListener('click', handleAddToCart8);
addToFavoritesButton8.addEventListener('click', handleAddToFavorites8);
applyFavoriteButton8.addEventListener('click', handleApplyFavorite8);
quantityInput8.addEventListener('input', updatePriceBasedOnQuantity8); // Listen for quantity changes

// Variables available to all code
let cart8 = [];
let favorites8 = [];
const basePrice8 = 3.99; // Base price of the product

// Initialize default values
productName8.innerText = 'Ciprofloxacin';
productPrice8.innerText = `$${basePrice8.toFixed(2)}`;

// Implement event handlers
function handleAddToCart8() {
    const quantity = parseInt(quantityInput8.value);
    addToCart8(productName8.innerText, basePrice8, quantity); // Use addToCart8 function

    const productTotal = basePrice8 * quantity;
    console.log('Added to cart:', { name: productName8.innerText, price: basePrice8, quantity, total: productTotal });
    alert(`Added to cart: ${productName8.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites8() {
    const quantity = parseInt(quantityInput8.value);
    const favorite = { name: productName8.innerText, price: basePrice8, quantity };

    localStorage.setItem('favoriteOrder8', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice8(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite8() {
    const savedFavorite = localStorage.getItem('favoriteOrder8');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput8.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity8() {
    const quantity = parseInt(quantityInput8.value);
    const total = basePrice8 * quantity;
    productPrice8.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart8(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//10th product Java Script
// Get references to interactive elements
const addToCartButton9 = document.getElementById('addToCart9');
const addToFavoritesButton9 = document.getElementById('addToFavorites9');
const applyFavoriteButton9 = document.getElementById('applyFavorite9');
const quantityInput9 = document.getElementById('quantity9');
const productName9 = document.getElementById('productName9');
const productPrice9 = document.getElementById('productPrice9');
const cartItems9 = document.getElementById('cartItems'); // Cart display element
const totalCost9 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton9.addEventListener('click', handleAddToCart9);
addToFavoritesButton9.addEventListener('click', handleAddToFavorites9);
applyFavoriteButton9.addEventListener('click', handleApplyFavorite9);
quantityInput9.addEventListener('input', updatePriceBasedOnQuantity9); // Listen for quantity changes

// Variables available to all code
let cart9 = [];
let favorites9 = [];
const basePrice9 = 6.99; // Base price of the product

// Initialize default values
productName9.innerText = 'Doxycycline';
productPrice9.innerText = `$${basePrice9.toFixed(2)}`;

// Implement event handlers
function handleAddToCart9() {
    const quantity = parseInt(quantityInput9.value);
    addToCart9(productName9.innerText, basePrice9, quantity); // Use addToCart9 function

    const productTotal = basePrice9 * quantity;
    console.log('Added to cart:', { name: productName9.innerText, price: basePrice9, quantity, total: productTotal });
    alert(`Added to cart: ${productName9.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites9() {
    const quantity = parseInt(quantityInput9.value);
    const favorite = { name: productName9.innerText, price: basePrice9, quantity };

    localStorage.setItem('favoriteOrder9', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice9(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite9() {
    const savedFavorite = localStorage.getItem('favoriteOrder9');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput9.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity9() {
    const quantity = parseInt(quantityInput9.value);
    const total = basePrice9 * quantity;
    productPrice9.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart9(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//11th product Java Script
// Get references to interactive elements
const addToCartButton10 = document.getElementById('addToCart10');
const addToFavoritesButton10 = document.getElementById('addToFavorites10');
const applyFavoriteButton10 = document.getElementById('applyFavorite10');
const quantityInput10 = document.getElementById('quantity10');
const productName10 = document.getElementById('productName10');
const productPrice10 = document.getElementById('productPrice10');
const cartItems10 = document.getElementById('cartItems'); // Cart display element
const totalCost10 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton10.addEventListener('click', handleAddToCart10);
addToFavoritesButton10.addEventListener('click', handleAddToFavorites10);
applyFavoriteButton10.addEventListener('click', handleApplyFavorite10);
quantityInput10.addEventListener('input', updatePriceBasedOnQuantity10); // Listen for quantity changes

// Variables available to all code
let cart10 = [];
let favorites10 = [];
const basePrice10 = 3.99; // Base price of the product

// Initialize default values
productName10.innerText = 'Metronidazole';
productPrice10.innerText = `$${basePrice10.toFixed(2)}`;

// Implement event handlers
function handleAddToCart10() {
    const quantity = parseInt(quantityInput10.value);
    addToCart10(productName10.innerText, basePrice10, quantity); // Use addToCart10 function

    const productTotal = basePrice10 * quantity;
    console.log('Added to cart:', { name: productName10.innerText, price: basePrice10, quantity, total: productTotal });
    alert(`Added to cart: ${productName10.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites10() {
    const quantity = parseInt(quantityInput10.value);
    const favorite = { name: productName10.innerText, price: basePrice10, quantity };

    localStorage.setItem('favoriteOrder10', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice10(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite10() {
    const savedFavorite = localStorage.getItem('favoriteOrder10');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput10.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity10() {
    const quantity = parseInt(quantityInput10.value);
    const total = basePrice10 * quantity;
    productPrice10.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart10(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//12th product Java Script
// Get references to interactive elements
const addToCartButton11 = document.getElementById('addToCart11');
const addToFavoritesButton11 = document.getElementById('addToFavorites11');
const applyFavoriteButton11 = document.getElementById('applyFavorite11');
const quantityInput11 = document.getElementById('quantity11');
const productName11 = document.getElementById('productName11');
const productPrice11 = document.getElementById('productPrice11');
const cartItems11 = document.getElementById('cartItems'); // Cart display element
const totalCost11 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton11.addEventListener('click', handleAddToCart11);
addToFavoritesButton11.addEventListener('click', handleAddToFavorites11);
applyFavoriteButton11.addEventListener('click', handleApplyFavorite11);
quantityInput11.addEventListener('input', updatePriceBasedOnQuantity11); // Listen for quantity changes

// Variables available to all code
let cart11 = [];
let favorites11 = [];
const basePrice11 = 8.99; // Base price of the product

// Initialize default values
productName11.innerText = 'Ceftriaxone';
productPrice11.innerText = `$${basePrice11.toFixed(2)}`;

// Implement event handlers
function handleAddToCart11() {
    const quantity = parseInt(quantityInput11.value);
    addToCart11(productName11.innerText, basePrice11, quantity); // Use addToCart function

    const productTotal = basePrice11 * quantity;
    console.log('Added to cart:', { name: productName11.innerText, price: basePrice11, quantity, total: productTotal });
    alert(`Added to cart: ${productName11.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites11() {
    const quantity = parseInt(quantityInput11.value);
    const favorite = { name: productName11.innerText, price: basePrice11, quantity };

    localStorage.setItem('favoriteOrder11', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice11(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite11() {
    const savedFavorite = localStorage.getItem('favoriteOrder11');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput11.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity11() {
    const quantity = parseInt(quantityInput11.value);
    const total = basePrice11 * quantity;
    productPrice11.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart11(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//13th product Java Script
// Get references to interactive elements
const addToCartButton12 = document.getElementById('addToCart12');
const addToFavoritesButton12 = document.getElementById('addToFavorites12');
const applyFavoriteButton12 = document.getElementById('applyFavorite12');
const quantityInput12 = document.getElementById('quantity12');
const productName12 = document.getElementById('productName12');
const productPrice12 = document.getElementById('productPrice12');
const cartItems12 = document.getElementById('cartItems'); // Cart display element
const totalCost12 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton12.addEventListener('click', handleAddToCart12);
addToFavoritesButton12.addEventListener('click', handleAddToFavorites12);
applyFavoriteButton12.addEventListener('click', handleApplyFavorite12);
quantityInput12.addEventListener('input', updatePriceBasedOnQuantity12); // Listen for quantity changes

// Variables available to all code
let cart12 = [];
let favorites12 = [];
const basePrice12 = 3.99; // Base price of the product

// Initialize default values
productName12.innerText = 'Fluoxetine';
productPrice12.innerText = `$${basePrice12.toFixed(2)}`;

// Implement event handlers
function handleAddToCart12() {
    const quantity = parseInt(quantityInput12.value);
    addToCart12(productName12.innerText, basePrice12, quantity); // Use addToCart function

    const productTotal = basePrice12 * quantity;
    console.log('Added to cart:', { name: productName12.innerText, price: basePrice12, quantity, total: productTotal });
    alert(`Added to cart: ${productName12.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites12() {
    const quantity = parseInt(quantityInput12.value);
    const favorite = { name: productName12.innerText, price: basePrice12, quantity };

    localStorage.setItem('favoriteOrder12', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice12(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite12() {
    const savedFavorite = localStorage.getItem('favoriteOrder12');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput12.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity12() {
    const quantity = parseInt(quantityInput12.value);
    const total = basePrice12 * quantity;
    productPrice12.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart12(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//14th product Java Script
// Get references to interactive elements
const addToCartButton13 = document.getElementById('addToCart13');
const addToFavoritesButton13 = document.getElementById('addToFavorites13');
const applyFavoriteButton13 = document.getElementById('applyFavorite13');
const quantityInput13 = document.getElementById('quantity13');
const productName13 = document.getElementById('productName13');
const productPrice13 = document.getElementById('productPrice13');
const cartItems13 = document.getElementById('cartItems'); // Cart display element
const totalCost13 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton13.addEventListener('click', handleAddToCart13);
addToFavoritesButton13.addEventListener('click', handleAddToFavorites13);
applyFavoriteButton13.addEventListener('click', handleApplyFavorite13);
quantityInput13.addEventListener('input', updatePriceBasedOnQuantity13); // Listen for quantity changes

// Variables available to all code
let cart13 = [];
let favorites13 = [];
const basePrice13 = 5.99; // Base price of the product

// Initialize default values
productName13.innerText = 'Sertraline';
productPrice13.innerText = `$${basePrice13.toFixed(2)}`;

// Implement event handlers
function handleAddToCart13() {
    const quantity = parseInt(quantityInput13.value);
    addToCart13(productName13.innerText, basePrice13, quantity); // Use addToCart function

    const productTotal = basePrice13 * quantity;
    console.log('Added to cart:', { name: productName13.innerText, price: basePrice13, quantity, total: productTotal });
    alert(`Added to cart: ${productName13.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites13() {
    const quantity = parseInt(quantityInput13.value);
    const favorite = { name: productName13.innerText, price: basePrice13, quantity };

    localStorage.setItem('favoriteOrder13', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice13(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite13() {
    const savedFavorite = localStorage.getItem('favoriteOrder13');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput13.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity13() {
    const quantity = parseInt(quantityInput13.value);
    const total = basePrice13 * quantity;
    productPrice13.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart13(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//15th product Java Script
// Get references to interactive elements
const addToCartButton14 = document.getElementById('addToCart14');
const addToFavoritesButton14 = document.getElementById('addToFavorites14');
const applyFavoriteButton14 = document.getElementById('applyFavorite14');
const quantityInput14 = document.getElementById('quantity14');
const productName14 = document.getElementById('productName14');
const productPrice14 = document.getElementById('productPrice14');
const cartItems14 = document.getElementById('cartItems'); // Cart display element
const totalCost14 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton14.addEventListener('click', handleAddToCart14);
addToFavoritesButton14.addEventListener('click', handleAddToFavorites14);
applyFavoriteButton14.addEventListener('click', handleApplyFavorite14);
quantityInput14.addEventListener('input', updatePriceBasedOnQuantity14); // Listen for quantity changes

// Variables available to all code
let cart14 = [];
let favorites14 = [];
const basePrice14 = 1.99; // Base price of the product

// Initialize default values
productName14.innerText = 'Citalopram';
productPrice14.innerText = `$${basePrice14.toFixed(2)}`;

// Implement event handlers
function handleAddToCart14() {
    const quantity = parseInt(quantityInput14.value);
    addToCart14(productName14.innerText, basePrice14, quantity); // Use addToCart function

    const productTotal = basePrice14 * quantity;
    console.log('Added to cart:', { name: productName14.innerText, price: basePrice14, quantity, total: productTotal });
    alert(`Added to cart: ${productName14.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites14() {
    const quantity = parseInt(quantityInput14.value);
    const favorite = { name: productName14.innerText, price: basePrice14, quantity };

    localStorage.setItem('favoriteOrder14', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice14(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite14() {
    const savedFavorite = localStorage.getItem('favoriteOrder14');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput14.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity14() {
    const quantity = parseInt(quantityInput14.value);
    const total = basePrice14 * quantity;
    productPrice14.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart14(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//16th product Java Script
// Get references to interactive elements
const addToCartButton15 = document.getElementById('addToCart15');
const addToFavoritesButton15 = document.getElementById('addToFavorites15');
const applyFavoriteButton15 = document.getElementById('applyFavorite15');
const quantityInput15 = document.getElementById('quantity15');
const productName15 = document.getElementById('productName15');
const productPrice15 = document.getElementById('productPrice15');
const cartItems15 = document.getElementById('cartItems'); // Cart display element
const totalCost15 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton15.addEventListener('click', handleAddToCart15);
addToFavoritesButton15.addEventListener('click', handleAddToFavorites15);
applyFavoriteButton15.addEventListener('click', handleApplyFavorite15);
quantityInput15.addEventListener('input', updatePriceBasedOnQuantity15); // Listen for quantity changes

// Variables available to all code
let cart15 = [];
let favorites15 = [];
const basePrice15 = 2.99; // Base price of the product

// Initialize default values
productName15.innerText = 'Escitalopram';
productPrice15.innerText = `$${basePrice15.toFixed(2)}`;

// Implement event handlers
function handleAddToCart15() {
    const quantity = parseInt(quantityInput15.value);
    addToCart15(productName15.innerText, basePrice15, quantity); // Use addToCart function

    const productTotal = basePrice15 * quantity;
    console.log('Added to cart:', { name: productName15.innerText, price: basePrice15, quantity, total: productTotal });
    alert(`Added to cart: ${productName15.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites15() {
    const quantity = parseInt(quantityInput15.value);
    const favorite = { name: productName15.innerText, price: basePrice15, quantity };

    localStorage.setItem('favoriteOrder15', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice15(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite15() {
    const savedFavorite = localStorage.getItem('favoriteOrder15');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput15.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity15() {
    const quantity = parseInt(quantityInput15.value);
    const total = basePrice15 * quantity;
    productPrice15.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart15(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//17th product Java Script
// Get references to interactive elements
const addToCartButton16 = document.getElementById('addToCart16');
const addToFavoritesButton16 = document.getElementById('addToFavorites16');
const applyFavoriteButton16 = document.getElementById('applyFavorite16');
const quantityInput16 = document.getElementById('quantity16');
const productName16 = document.getElementById('productName16');
const productPrice16 = document.getElementById('productPrice16');
const cartItems16 = document.getElementById('cartItems'); // Cart display element
const totalCost16 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton16.addEventListener('click', handleAddToCart16);
addToFavoritesButton16.addEventListener('click', handleAddToFavorites16);
applyFavoriteButton16.addEventListener('click', handleApplyFavorite16);
quantityInput16.addEventListener('input', updatePriceBasedOnQuantity16); // Listen for quantity changes

// Variables available to all code
let cart16 = [];
let favorites16 = [];
const basePrice16 = 6.99; // Base price of the product

// Initialize default values
productName16.innerText = 'Duloxetine';
productPrice16.innerText = `$${basePrice16.toFixed(2)}`;

// Implement event handlers
function handleAddToCart16() {
    const quantity = parseInt(quantityInput16.value);
    addToCart16(productName16.innerText, basePrice16, quantity); // Use addToCart function

    const productTotal = basePrice16 * quantity;
    console.log('Added to cart:', { name: productName16.innerText, price: basePrice16, quantity, total: productTotal });
    alert(`Added to cart: ${productName16.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites16() {
    const quantity = parseInt(quantityInput16.value);
    const favorite = { name: productName16.innerText, price: basePrice16, quantity };

    localStorage.setItem('favoriteOrder16', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice16(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite16() {
    const savedFavorite = localStorage.getItem('favoriteOrder16');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput16.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity16() {
    const quantity = parseInt(quantityInput16.value);
    const total = basePrice16 * quantity;
    productPrice16.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart16(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//18th product Java Script
// Get references to interactive elements
const addToCartButton17 = document.getElementById('addToCart17');
const addToFavoritesButton17 = document.getElementById('addToFavorites17');
const applyFavoriteButton17 = document.getElementById('applyFavorite17');
const quantityInput17 = document.getElementById('quantity17');
const productName17 = document.getElementById('productName17');
const productPrice17 = document.getElementById('productPrice17');
const cartItems17 = document.getElementById('cartItems'); // Cart display element
const totalCost17 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton17.addEventListener('click', handleAddToCart17);
addToFavoritesButton17.addEventListener('click', handleAddToFavorites17);
applyFavoriteButton17.addEventListener('click', handleApplyFavorite17);
quantityInput17.addEventListener('input', updatePriceBasedOnQuantity17); // Listen for quantity changes

// Variables available to all code
let cart17 = [];
let favorites17 = [];
const basePrice17 = 4.99; // Base price of the product

// Initialize default values
productName17.innerText = 'Venlafaxine';
productPrice17.innerText = `$${basePrice17.toFixed(2)}`;

// Implement event handlers
function handleAddToCart17() {
    const quantity = parseInt(quantityInput17.value);
    addToCart17(productName17.innerText, basePrice17, quantity); // Use addToCart function

    const productTotal = basePrice17 * quantity;
    console.log('Added to cart:', { name: productName17.innerText, price: basePrice17, quantity, total: productTotal });
    alert(`Added to cart: ${productName17.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites17() {
    const quantity = parseInt(quantityInput17.value);
    const favorite = { name: productName17.innerText, price: basePrice17, quantity };

    localStorage.setItem('favoriteOrder17', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice17(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite17() {
    const savedFavorite = localStorage.getItem('favoriteOrder17');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput17.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity17() {
    const quantity = parseInt(quantityInput17.value);
    const total = basePrice17 * quantity;
    productPrice17.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart17(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//19th product Java Script
// Get references to interactive elements
const addToCartButton18 = document.getElementById('addToCart18');
const addToFavoritesButton18 = document.getElementById('addToFavorites18');
const applyFavoriteButton18 = document.getElementById('applyFavorite18');
const quantityInput18 = document.getElementById('quantity18');
const productName18 = document.getElementById('productName18');
const productPrice18 = document.getElementById('productPrice18');
const cartItems18 = document.getElementById('cartItems'); // Cart display element
const totalCost18 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton18.addEventListener('click', handleAddToCart18);
addToFavoritesButton18.addEventListener('click', handleAddToFavorites18);
applyFavoriteButton18.addEventListener('click', handleApplyFavorite18);
quantityInput18.addEventListener('input', updatePriceBasedOnQuantity18); // Listen for quantity changes

// Variables available to all code
let cart18 = [];
let favorites18 = [];
const basePrice18 = 6.99; // Base price of the product

// Initialize default values
productName18.innerText = 'Diphenhydramine';
productPrice18.innerText = `$${basePrice18.toFixed(2)}`;

// Implement event handlers
function handleAddToCart18() {
    const quantity = parseInt(quantityInput18.value);
    addToCart18(productName18.innerText, basePrice18, quantity); // Use addToCart function

    const productTotal = basePrice18 * quantity;
    console.log('Added to cart:', { name: productName18.innerText, price: basePrice18, quantity, total: productTotal });
    alert(`Added to cart: ${productName18.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites18() {
    const quantity = parseInt(quantityInput18.value);
    const favorite = { name: productName18.innerText, price: basePrice18, quantity };

    localStorage.setItem('favoriteOrder18', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice18(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite18() {
    const savedFavorite = localStorage.getItem('favoriteOrder18');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput18.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity18() {
    const quantity = parseInt(quantityInput18.value);
    const total = basePrice18 * quantity;
    productPrice18.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart18(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//20th product Java Script
// Get references to interactive elements
const addToCartButton19 = document.getElementById('addToCart19');
const addToFavoritesButton19 = document.getElementById('addToFavorites19');
const applyFavoriteButton19 = document.getElementById('applyFavorite19');
const quantityInput19 = document.getElementById('quantity19');
const productName19 = document.getElementById('productName19');
const productPrice19 = document.getElementById('productPrice19');
const cartItems19 = document.getElementById('cartItems'); // Cart display element
const totalCost19 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton19.addEventListener('click', handleAddToCart19);
addToFavoritesButton19.addEventListener('click', handleAddToFavorites19);
applyFavoriteButton19.addEventListener('click', handleApplyFavorite19);
quantityInput19.addEventListener('input', updatePriceBasedOnQuantity19); // Listen for quantity changes

// Variables available to all code
let cart19 = [];
let favorites19 = [];
const basePrice19 = 2.99; // Base price of the product

// Initialize default values
productName19.innerText = 'Loratadine';
productPrice19.innerText = `$${basePrice19.toFixed(2)}`;

// Implement event handlers
function handleAddToCart19() {
    const quantity = parseInt(quantityInput19.value);
    addToCart19(productName19.innerText, basePrice19, quantity); // Use addToCart function

    const productTotal = basePrice19 * quantity;
    console.log('Added to cart:', { name: productName19.innerText, price: basePrice19, quantity, total: productTotal });
    alert(`Added to cart: ${productName19.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites19() {
    const quantity = parseInt(quantityInput19.value);
    const favorite = { name: productName19.innerText, price: basePrice19, quantity };

    localStorage.setItem('favoriteOrder19', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice19(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite19() {
    const savedFavorite = localStorage.getItem('favoriteOrder19');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput19.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity19() {
    const quantity = parseInt(quantityInput19.value);
    const total = basePrice19 * quantity;
    productPrice19.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart19(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//21st product Java Script
// Get references to interactive elements
const addToCartButton20 = document.getElementById('addToCart20');
const addToFavoritesButton20 = document.getElementById('addToFavorites20');
const applyFavoriteButton20 = document.getElementById('applyFavorite20');
const quantityInput20 = document.getElementById('quantity20');
const productName20 = document.getElementById('productName20');
const productPrice20 = document.getElementById('productPrice20');
const cartItems20 = document.getElementById('cartItems'); // Cart display element
const totalCost20 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton20.addEventListener('click', handleAddToCart20);
addToFavoritesButton20.addEventListener('click', handleAddToFavorites20);
applyFavoriteButton20.addEventListener('click', handleApplyFavorite20);
quantityInput20.addEventListener('input', updatePriceBasedOnQuantity20); // Listen for quantity changes

// Variables available to all code
let cart20 = [];
let favorites20 = [];
const basePrice20 = 5.99; // Base price of the product

// Initialize default values
productName20.innerText = 'Cetirizine';
productPrice20.innerText = `$${basePrice20.toFixed(2)}`;

// Implement event handlers
function handleAddToCart20() {
    const quantity = parseInt(quantityInput20.value);
    addToCart20(productName20.innerText, basePrice20, quantity); // Use addToCart function

    const productTotal = basePrice20 * quantity;
    console.log('Added to cart:', { name: productName20.innerText, price: basePrice20, quantity, total: productTotal });
    alert(`Added to cart: ${productName20.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites20() {
    const quantity = parseInt(quantityInput20.value);
    const favorite = { name: productName20.innerText, price: basePrice20, quantity };

    localStorage.setItem('favoriteOrder20', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice20(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite20() {
    const savedFavorite = localStorage.getItem('favoriteOrder20');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput20.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity20() {
    const quantity = parseInt(quantityInput20.value);
    const total = basePrice20 * quantity;
    productPrice20.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart20(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//22nd product Java Script
// Get references to interactive elements
const addToCartButton21 = document.getElementById('addToCart21');
const addToFavoritesButton21 = document.getElementById('addToFavorites21');
const applyFavoriteButton21 = document.getElementById('applyFavorite21');
const quantityInput21 = document.getElementById('quantity21');
const productName21 = document.getElementById('productName21');
const productPrice21 = document.getElementById('productPrice21');
const cartItems21 = document.getElementById('cartItems'); // Cart display element
const totalCost21 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton21.addEventListener('click', handleAddToCart21);
addToFavoritesButton21.addEventListener('click', handleAddToFavorites21);
applyFavoriteButton21.addEventListener('click', handleApplyFavorite21);
quantityInput21.addEventListener('input', updatePriceBasedOnQuantity21); // Listen for quantity changes

// Variables available to all code
let cart21 = [];
let favorites21 = [];
const basePrice21 = 3.99; // Base price of the product

// Initialize default values
productName21.innerText = 'Fexofenadine';
productPrice21.innerText = `$${basePrice21.toFixed(2)}`;

// Implement event handlers
function handleAddToCart21() {
    const quantity = parseInt(quantityInput21.value);
    addToCart21(productName21.innerText, basePrice21, quantity); // Use addToCart function

    const productTotal = basePrice21 * quantity;
    console.log('Added to cart:', { name: productName21.innerText, price: basePrice21, quantity, total: productTotal });
    alert(`Added to cart: ${productName21.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites21() {
    const quantity = parseInt(quantityInput21.value);
    const favorite = { name: productName21.innerText, price: basePrice21, quantity };

    localStorage.setItem('favoriteOrder21', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice21(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite21() {
    const savedFavorite = localStorage.getItem('favoriteOrder21');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput21.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity21() {
    const quantity = parseInt(quantityInput21.value);
    const total = basePrice21 * quantity;
    productPrice21.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart21(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//23rd product Java Script
// Get references to interactive elements
const addToCartButton22 = document.getElementById('addToCart22');
const addToFavoritesButton22 = document.getElementById('addToFavorites22');
const applyFavoriteButton22 = document.getElementById('applyFavorite22');
const quantityInput22 = document.getElementById('quantity22');
const productName22 = document.getElementById('productName22');
const productPrice22 = document.getElementById('productPrice22');
const cartItems22 = document.getElementById('cartItems'); // Cart display element
const totalCost22 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton22.addEventListener('click', handleAddToCart22);
addToFavoritesButton22.addEventListener('click', handleAddToFavorites22);
applyFavoriteButton22.addEventListener('click', handleApplyFavorite22);
quantityInput22.addEventListener('input', updatePriceBasedOnQuantity22); // Listen for quantity changes

// Variables available to all code
let cart22 = [];
let favorites22 = [];
const basePrice22 = 1.99; // Base price of the product

// Initialize default values
productName22.innerText = 'Losartan';
productPrice22.innerText = `$${basePrice22.toFixed(2)}`;

// Implement event handlers
function handleAddToCart22() {
    const quantity = parseInt(quantityInput22.value);
    addToCart22(productName22.innerText, basePrice22, quantity); // Use addToCart function

    const productTotal = basePrice22 * quantity;
    console.log('Added to cart:', { name: productName22.innerText, price: basePrice22, quantity, total: productTotal });
    alert(`Added to cart: ${productName22.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites22() {
    const quantity = parseInt(quantityInput22.value);
    const favorite = { name: productName22.innerText, price: basePrice22, quantity };

    localStorage.setItem('favoriteOrder22', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice22(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite22() {
    const savedFavorite = localStorage.getItem('favoriteOrder22');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput22.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity22() {
    const quantity = parseInt(quantityInput22.value);
    const total = basePrice22 * quantity;
    productPrice22.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart22(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//24th product Java Script
// Get references to interactive elements
const addToCartButton23 = document.getElementById('addToCart23');
const addToFavoritesButton23 = document.getElementById('addToFavorites23');
const applyFavoriteButton23 = document.getElementById('applyFavorite23');
const quantityInput23 = document.getElementById('quantity23');
const productName23 = document.getElementById('productName23');
const productPrice23 = document.getElementById('productPrice23');
const cartItems23 = document.getElementById('cartItems'); // Cart display element
const totalCost23 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton23.addEventListener('click', handleAddToCart23);
addToFavoritesButton23.addEventListener('click', handleAddToFavorites23);
applyFavoriteButton23.addEventListener('click', handleApplyFavorite23);
quantityInput23.addEventListener('input', updatePriceBasedOnQuantity23); // Listen for quantity changes

// Variables available to all code
let cart23 = [];
let favorites23 = [];
const basePrice23 = 3.99; // Base price of the product

// Initialize default values
productName23.innerText = 'Metoprolol';
productPrice23.innerText = `$${basePrice23.toFixed(2)}`;

// Implement event handlers
function handleAddToCart23() {
    const quantity = parseInt(quantityInput23.value);
    addToCart23(productName23.innerText, basePrice23, quantity); // Use addToCart function

    const productTotal = basePrice23 * quantity;
    console.log('Added to cart:', { name: productName23.innerText, price: basePrice23, quantity, total: productTotal });
    alert(`Added to cart: ${productName23.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites23() {
    const quantity = parseInt(quantityInput23.value);
    const favorite = { name: productName23.innerText, price: basePrice23, quantity };

    localStorage.setItem('favoriteOrder23', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice23(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite23() {
    const savedFavorite = localStorage.getItem('favoriteOrder23');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput23.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity23() {
    const quantity = parseInt(quantityInput23.value);
    const total = basePrice23 * quantity;
    productPrice23.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart23(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//25th product Java Script
// Get references to interactive elements
const addToCartButton24 = document.getElementById('addToCart24');
const addToFavoritesButton24 = document.getElementById('addToFavorites24');
const applyFavoriteButton24 = document.getElementById('applyFavorite24');
const quantityInput24 = document.getElementById('quantity24');
const productName24 = document.getElementById('productName24');
const productPrice24 = document.getElementById('productPrice24');
const cartItems24 = document.getElementById('cartItems'); // Cart display element
const totalCost24 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton24.addEventListener('click', handleAddToCart24);
addToFavoritesButton24.addEventListener('click', handleAddToFavorites24);
applyFavoriteButton24.addEventListener('click', handleApplyFavorite24);
quantityInput24.addEventListener('input', updatePriceBasedOnQuantity24); // Listen for quantity changes

// Variables available to all code
let cart24 = [];
let favorites24 = [];
const basePrice24 = 6.99; // Base price of the product

// Initialize default values
productName24.innerText = 'Enalapril';
productPrice24.innerText = `$${basePrice24.toFixed(2)}`;

// Implement event handlers
function handleAddToCart24() {
    const quantity = parseInt(quantityInput24.value);
    addToCart24(productName24.innerText, basePrice24, quantity); // Use addToCart function

    const productTotal = basePrice24 * quantity;
    console.log('Added to cart:', { name: productName24.innerText, price: basePrice24, quantity, total: productTotal });
    alert(`Added to cart: ${productName24.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites24() {
    const quantity = parseInt(quantityInput24.value);
    const favorite = { name: productName24.innerText, price: basePrice24, quantity };

    localStorage.setItem('favoriteOrder24', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice24(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite24() {
    const savedFavorite = localStorage.getItem('favoriteOrder24');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput24.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity24() {
    const quantity = parseInt(quantityInput24.value);
    const total = basePrice24 * quantity;
    productPrice24.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart24(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}










//26th product Java Script
// Get references to interactive elements
const addToCartButton25 = document.getElementById('addToCart25');
const addToFavoritesButton25 = document.getElementById('addToFavorites25');
const applyFavoriteButton25 = document.getElementById('applyFavorite25');
const quantityInput25 = document.getElementById('quantity25');
const productName25 = document.getElementById('productName25');
const productPrice25 = document.getElementById('productPrice25');
const cartItems25 = document.getElementById('cartItems'); // Cart display element
const totalCost25 = document.getElementById('totalCost'); // Total cost display element

// Listen for events
addToCartButton25.addEventListener('click', handleAddToCart25);
addToFavoritesButton25.addEventListener('click', handleAddToFavorites25);
applyFavoriteButton25.addEventListener('click', handleApplyFavorite25);
quantityInput25.addEventListener('input', updatePriceBasedOnQuantity25); // Listen for quantity changes

// Variables available to all code
let cart25 = [];
let favorites25 = [];
const basePrice25 = 8.99; // Base price of the product

// Initialize default values
productName25.innerText = 'Hydrochlorothiazide';
productPrice25.innerText = `$${basePrice25.toFixed(2)}`;

// Implement event handlers
function handleAddToCart25() {
    const quantity = parseInt(quantityInput25.value);
    addToCart25(productName25.innerText, basePrice25, quantity); // Use addToCart function

    const productTotal = basePrice25 * quantity;
    console.log('Added to cart:', { name: productName25.innerText, price: basePrice25, quantity, total: productTotal });
    alert(`Added to cart: ${productName25.innerText}, Quantity: ${quantity}, Total Cost: $${productTotal.toFixed(2)}`);
}

function handleAddToFavorites25() {
    const quantity = parseInt(quantityInput25.value);
    const favorite = { name: productName25.innerText, price: basePrice25, quantity };

    localStorage.setItem('favoriteOrder25', JSON.stringify(favorite));
    console.log('Saved to favorites:', favorite);
    alert('Favorite order saved!');
}


// Function to update total price in favorites table based on quantity input
function updateFavoriteTotalPrice25(event) {
    const quantity = parseInt(event.target.value); // Get the new quantity
    const pricePerUnit = parseFloat(event.target.dataset.price); // Retrieve price per unit from data attribute

    // Calculate the new total price
    const newTotalPrice = (quantity * pricePerUnit).toFixed(2);

    // Update the total price cell in the favorites table
    const totalPriceCell = event.target.closest("tr").querySelector(".favorite-total-price");
    totalPriceCell.innerText = `$${newTotalPrice}`;
}

// Function to apply favorite order
function handleApplyFavorite25() {
    const savedFavorite = localStorage.getItem('favoriteOrder25');

    if (savedFavorite) {
        const favoriteOrder = JSON.parse(savedFavorite);

        // Get the current quantity from the product card
        const currentQuantity = parseInt(quantityInput25.value); // Use the quantity from the input in the product card
        const totalPrice = (favoriteOrder.price * currentQuantity).toFixed(2);

        // Get the favorites table body without clearing previous entries
        const favoritesTableBody = document.getElementById("favorites-items");

        // Add favorite order to the favorites table with the updated quantity and total price
        favoritesTableBody.innerHTML += `
            <tr>
                <td>${favoriteOrder.name}</td>
                <td>$${favoriteOrder.price}</td>
                <td>${currentQuantity}</td>
                <td>$${totalPrice}</td>
            </tr>
        `;

        console.log('Applied favorite order:', { ...favoriteOrder, quantity: currentQuantity, total: totalPrice });
        alert('Favorite order applied!');
    } else {
        alert('No favorite order found!');
    }
}


function updatePriceBasedOnQuantity25() {
    const quantity = parseInt(quantityInput25.value);
    const total = basePrice25 * quantity;
    productPrice25.innerText = `$${total.toFixed(2)}`;
}

// Add to cart functionality
function addToCart25(name, price, quantity) {
    quantity = parseInt(quantity);

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: quantity,
            totalPrice: price * quantity
        });
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;

    // Add each item in the cart to the display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>= $${item.price.toFixed(2)} * ${item.quantity}</span>
            <span>= $${item.totalPrice.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.totalPrice;
    });

    // Update total cost
    totalCost.innerText = `Total = $${total.toFixed(2)}`;
}

// Function for Buy Now button
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);
        
        // Redirect to the checkout page with the total amount as a URL parameter
        window.location.href = `index10.html?total=${totalAmount.toFixed(2)}`;
    }
}
