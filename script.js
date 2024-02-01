"use strict";
const inputCheck = document.querySelector(".toggle-inpt");
const spanMonth = document.querySelector(".month");
const spanYear = document.querySelector(".year");
const toggleItem = document.querySelector(".toggle-bg-item");

const priceT = document.querySelector(".check-pricet");
const priceTime = document.querySelectorAll(".price-time");
const priceNum = document.querySelectorAll(".price-num");

// Converting the prices automatically
const yearMonthPrice = function (price, month = false) {
  let p;
  month === true
    ? (p = +price.innerHTML.split("").slice(1).join("") * 10)
    : (p = +price.innerHTML.split("").slice(1).join("") / 10);

  price.innerHTML = `$${p}`;
};

inputCheck.addEventListener("click", function (e) {
  if (e.target.checked === true) {
    spanYear.classList.add("selected-time");
    spanMonth.classList.remove("selected-time");

    let html = `<span>2 months free</span>`;

    priceTime.forEach(time => (time.innerHTML = "yr"));
    priceNum.forEach(price => yearMonthPrice(price, true));
  } else {
    spanYear.classList.remove("selected-time");
    spanMonth.classList.add("selected-time");

    priceTime.forEach(time => (time.innerHTML = "mon"));
    priceNum.forEach(price => yearMonthPrice(price, false));
  }
});
