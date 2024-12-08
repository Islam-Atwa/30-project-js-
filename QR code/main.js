

let qrText = document.getElementById("Qrtext");
let qrImage = document.getElementById("qrImage");
let imgBox = document.getElementById("imgBox");
let button = document.getElementById("btn");
//function onclick


document.addEventListener("DOMContentLoaded", ()=>{

    button.addEventListener("click", function(){
        if (qrText.value.length > 0 ){
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value.trim();
            imgBox.classList.add("show-img");
        }
        if (qrText.value.length === 0) {
            alert("Error : please enter URL")
        }
    });
});