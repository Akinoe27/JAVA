// let imageTrigger = document.querySelector("#triggerImage1");
// let modalContainer = document.querySelector("#enlargeImage1");
// let modalImageSource = document.querySelector("#modalImage");

// // variable for bootstrap css modal
// let bootstrapModal = new bootstrap.Modal(modalContainer)
// function showImageInmodal(){
//     modalImageSource.src = this.src
//     modalImageSource.className = "d-block mx-auto w-100"
//     bootstrapModal.show();
// }

// // add event to variable that refer to the original image
// imageTrigger.addEventListener("click", showImageInmodal)

// Act2
// let buttonTrigger = document.querySelector("#triggerButton");
// let ContainerModal = document.querySelector("#showQuantity");
// let modalButtonSource = document.querySelector("#modalButton");

// // variable for bootstrap css modal
// let bootstrapModal = new bootstrap.Modal(ContainerModal)
// function showQuantityInmodal(){
//     modalButtonSource.src = this.src
//     bootstrapModal.show();
// }

// // add event to variable that refer to the original image
// buttonTrigger.addEventListener("click", showQuantityInmodal)





document.addEventListener("DOMContentLoaded",function (){
  document.querySelectorAll("#Image").forEach((element)=>{
element.addEventListener("click", function (){
    document.querySelector("#modalImage").src = this.src;
})
  })
});

// document.addEventListener("DOMContentLoaded",function (){
//     document.querySelectorAll("#Button").forEach((element)=>{
//         element.addEventListener("click", function (){
//             document.querySelector("#modalButton").src = this.src;
//         })
//           })
//     })
   
 

 




