// empty array
let shoppingList = [];

// call the add to cart button
const btnAddToCart = document.getElementById("addItemBtn");

// addeventlistener on the add the cart button
btnAddToCart.addEventListener("click", function () {
  const itemInput = document.getElementById("itemInput").value;

  // how do we push the itemInput in the shoppingList
  if (itemInput !== "") {
    shoppingList.push(itemInput);
    displayShoppingList();
  } else {
    alert("Enter a Item");
  }
});

// function to get the the display of shoppings
function displayShoppingList() {
  // call the ul
  const shopList = document.getElementById("shoppingList");

  shopList.innerHTML = "";

  shoppingList.forEach((item) => {
    // create li
    // createElement()

    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.classList.add("list-group-item");
    shopList.append(listItem);
  });
}
