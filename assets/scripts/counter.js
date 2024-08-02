// for the add-to-cart button and the added-to-cart-counter counter

document.addEventListener('DOMContentLoaded', function () {
    // Get the like counter element
    const likeCounter = document.getElementById('like-counter');
    const cartCounter = document.getElementById('cart-counter');

    // Initialize the counters
    let likeCount = 0;
    let cartCount = 0;

    // Get all like buttons
    const likeButtons = document.querySelectorAll('.like-button');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listener to each like button
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const heartPath = button.querySelector('.heart-path');

            if (heartPath.classList.contains('liked')) {
                // Decrement the counter if already liked
                likeCount--;
                heartPath.classList.remove('liked');
            } else {
                // Increment the counter if not liked
                likeCount++;
                heartPath.classList.add('liked');
            }

            // Update the like counter display
            likeCounter.textContent = likeCount;
        });
    });

    // Add event listener to each add to cart button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            // Increment the cart counter
            cartCount++;

            // Update the cart counter display
            cartCounter.textContent = cartCount;
        });
    });
});

function itemLike(itemId) {
    // Logic for liking an item
    console.log('Toggled like for item with ID:', itemId);
}

function addToCart() {
    // Logic for adding to cart
    console.log('Item added to cart');
}

// for the quantity adder

function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumValue = parseInt(totalClicks.innerText) + click;
    console.log(sumValue);
    totalClicks.innerText = sumValue;

    // avoid negatives
    if (sumValue < 0) {
        totalClicks.innerText = 0;
    }
}

