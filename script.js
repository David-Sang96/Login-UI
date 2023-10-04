"use strict";

const submitBtn = document.querySelector(".left-box__form--btn");
const emailInput = document.querySelector(".left-box__form--input");


submitBtn.addEventListener("click",function(e){
  e.preventDefault();
  const inputValue = emailInput.value;
  console.log(inputValue);
  if (inputValue === ""){
    return
  }
  if (inputValue === "luainawl@gmail.com"){
     window.location.assign("success.html");
  }
  else{
    alert("invalid email");
    emailInput.value = "";
    return
  }
})