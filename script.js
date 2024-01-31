"use strict";
const inputCheck = document.querySelector(".toggle-inpt");
const spanMonth = document.querySelector(".month");
const spanYear = document.querySelector(".year");
const toggleItem = document.querySelector(".toggle-bg-item");

const priceTime = document.querySelectorAll(".price-time");
const priceNum = document.querySelectorAll(".price-num");
inputCheck.addEventListener("click", function (e) {
  if (e.target.checked === true) {
    spanYear.classList.add("selected-time");
    spanMonth.classList.remove("selected-time");
    priceTime.forEach(time => (time.innerHTML = "yr"));
    priceNum.forEach(price => console.log(price));
    // priceTime.innerHTML = "yr";
    console.log("It has been checked");
  } else {
    console.log("It has been uncheked");
    spanYear.classList.remove("selected-time");
    spanMonth.classList.add("selected-time");

    priceTime.forEach(time => (time.innerHTML = "mon"));
    priceNum.forEach(price => +price / 10);
  }
});
