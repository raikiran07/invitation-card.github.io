'use-strict';



const submitBtn = document.getElementById("submit-btn");

const card = document.querySelector(".card");
const userName = document.getElementById("name");

function submitName(){
    const userInput = document.getElementById("user-name").value;
    if(!userInput){
        alert("Please enter your name!");
    }
    else{
        console.log("hello");
        userName.innerHTML = userInput;
        card.classList.remove("hide");
        downloadBtn.classList.remove("hide");
    }
    
       
    
}









submitBtn.addEventListener("click",submitName);
