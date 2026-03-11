let cart = [];

function addToCart(product, price)
{
let item = {
name: product,
price: price
};

cart.push(item);

localStorage.setItem("cart", JSON.stringify(cart));

alert(product + " added to cart");
}