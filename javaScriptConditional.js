/* Task 1 */

let isLoggedIn = true;

if(isLoggedIn){
    console.log("You can add item to cart. ");
} else{
    console.log("Need to be logged in, in order to add items to cart.");
}


/* Task 2 */

let availableProducts = [
    {name: "Jolly Ranchers", price: 4.99},
    {name: 'Zours', price: 3.99},
    {name: 'Tic Tacs', price: 1.99}
];

// let availableProducts = ["iPhone", "Apple Watch", "iPad", "Macbook Pro"]
cart = []

function addProduct(productName){
    const product = availableProducts.find(p => p.name === productName);
    if (product){
        cart.push(product);
        console.log(`${product} has been added to the cart`)
    } else{
        console.log("Invalid")
    }
}

function calculateTotalCost(){
    let totalCost = 0;
    cart.forEach(item => {
        totalCost += item.price;
    });
    return totalCost
}


console.log("These are the current list of products. ")
availableProducts.forEach(product => {
    console.log(`${product.name} - $${product.price}`)
})

addProduct("Jolly Ranchers")
addProduct("Tic Tacs")
const totalCost = calculateTotalCost();
console.log(`Total cost in cart ${totalCost}`)









