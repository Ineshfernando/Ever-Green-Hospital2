//1st form Java Script
function submitForm() {
    const form = document.getElementById('detailsForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Check if form is valid before displaying the message
    if (form.checkValidity()) {
        thankYouMessage.classList.remove('hidden'); // Shows thank-you message
    } else {
        form.reportValidity(); // Shows validation errors if form is incomplete
    }
}


//2nd form Java Script
function displayThankYouMessage() {
    const form = document.getElementById('deliveryForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Check if form is valid before displaying the message
    if (form.checkValidity()) {
        confirmationMessage.classList.remove('message-hidden'); // Shows thank-you message
    } else {
        form.reportValidity(); // Shows validation errors if form is incomplete
    }
}


//2nd form Java Script
function displayThankYouMessage() {
    const form = document.getElementById('deliveryForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Check if form is valid before displaying the message
    if (form.checkValidity()) {
        confirmationMessage.classList.remove('message-hidden'); // Shows thank-you message
    } else {
        form.reportValidity(); // Shows validation errors if form is incomplete
    }
}


//3rd form Java Script
function submitPaymentForm() {
    const form = document.getElementById('paymentForm');
    const supportMessage = document.getElementById('supportMessage');

    // Check if form is valid before displaying the message
    if (form.checkValidity()) {
        supportMessage.classList.remove('hidden'); // Shows thank-you message
    } else {
        form.reportValidity(); // Shows validation errors if form is incomplete
    }
}


//PAY NOW Java Script
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

    // Update total cost display
    totalCost.innerText = `The Total = $${total.toFixed(2)}`;
}



// Function for PAY NOW button
function buyNow() {
    // Check if all forms are filled and valid
    const forms = [
        document.getElementById('detailsForm'),
        document.getElementById('deliveryForm'),
        document.getElementById('paymentForm')
    ];

    for (let form of forms) {
        if (!form.checkValidity()) {
            form.reportValidity(); // Show validation errors for incomplete form
            return; // Stop the payment process if any form is invalid
        }
    }

    // Get the delivery date entered by the user
    const deliveryDate = document.getElementById('preferred-date').value;

    alert(`Your purchased items will arrive on ${deliveryDate}. Thank you for your support!`);
    cart = []; // Clear the cart
    updateCart(); // Refresh the cart display
}
