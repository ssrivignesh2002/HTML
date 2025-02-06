function addToCart(movie) {
    const cartList = document.getElementById('cartList');
    const listItem = document.createElement('li');
    listItem.textContent = movie;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Del';
    removeButton.onclick = function() {
        cartList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
}
