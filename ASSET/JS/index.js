document.addEventListener("DOMContentLoaded",function (){
  document.querySelectorAll(".img-fluid").forEach((imgDesc)=>{
    imgDesc.addEventListener("click", function (){
    document.querySelector("#modalImage").src = this.src;
})
  })
});

document.addEventListener("DOMContentLoaded",function (){
    document.querySelectorAll(".btn").forEach((orderBtn)=>{
      orderBtn.addEventListener("click", function () {
        let parentContainer = orderBtn.closest(".col-lg-3");
        let ProductImg = parentContainer.querySelector(".img-fluid").src;
        let itemPrice = parentContainer.querySelector("#price").textContent;
        console.log(itemPrice);
        document.querySelector("#productImage").src = ProductImg;
        document.querySelector("#priceModal").textContent = itemPrice;
        // Quantity / Price Reset
        document.querySelector("#quantity").value = "";
        document.querySelector("#totalPrice").textContent = "0.00";
      });
    });
    document.querySelector("#quantity").addEventListener("input", () => {
      // SRP Price
      
      let price = 10
      let result = document.querySelector ("#quantity").value
      let totalPrice = result * price;
      document.querySelector("#totalPrice").textContent = totalPrice.toFixed(2);

    });
    });

  
   
 

 




