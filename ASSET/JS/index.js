let imageTrigger = document.querySelector("#triggerImage");
let modalContainer = document.querySelector("#enlargeImage");
let modalImageSource = document.querySelector("#modalImage");

// variable for bootstrap css modal
let bootstrapModal = new bootstrap.Modal(modalContainer)
function showImageInmodal(){
    modalImageSource.src = this.src
    modalImageSource.className = "d-block mx-auto w-100"
    bootstrapModal.show();
}

// add event to variable that refer to the original image
imageTrigger.addEventListener("click", showImageInmodal)

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





