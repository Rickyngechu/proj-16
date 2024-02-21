"use strict";
const inputCheck = document.querySelector(".toggle-inpt");
const spanMonth = document.querySelector(".month");
const spanYear = document.querySelector(".year");
const toggleItem = document.querySelector(".toggle-bg-item");

const priceT = document.querySelector(".check-pricet");
const priceTime = document.querySelectorAll(".price-time");
const priceNum = document.querySelectorAll(".price-num");

const yearPlusTag = document.querySelectorAll(".year-tplus");

const inputFields = document.querySelectorAll(".input-ct");
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

    yearPlusTag.forEach(el => (el.style.display = "block"));
    priceTime.forEach(time => (time.innerHTML = "yr"));
    priceNum.forEach(price => yearMonthPrice(price, true));

    priceTime.forEach(el => el.insertAdjacentHTML("afterbegin", html));
  } else {
    spanYear.classList.remove("selected-time");
    spanMonth.classList.add("selected-time");

    priceTime.forEach(time => (time.innerHTML = "mon"));
    priceNum.forEach(price => yearMonthPrice(price, false));

    yearPlusTag.forEach(el => (el.style.display = "none"));
  }
});

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");
  const dots = document.querySelectorAll(".dot");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach(dot => dot.classList.remove("dot--active"));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
      // btnLeft.style.visibility = "hidden";
    } else {
      curSlide--;
      // btnLeft.style.visibility = "visible";
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    // createDots();
    activateDot(0);
  };
  init();

  const name = document.querySelector(".name");
  const email = document.querySelector(".email");
  const phone = document.querySelector(".phone");

  const checkInpts = document.querySelectorAll(".check-input");
  // Event handlers
  btnRight.addEventListener("click", function (e) {
    e.preventDefault();
    // if (name.value === "" || email.value === "" || phone.value === "") {
    //   alert("Please fill in the data");
    //   return;
    // }

    nextSlide();
    console.log(name.value, email.value, phone.value);
    if (curSlide !== 2) return;
    console.log(
      checkInpts.forEach((inp, i) => {
        if (inp.checked) {
          const checked = [];
          inp.value === undefined ? console.log("") : console.log(inp.value);
        }
      })
    );
  });

  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();
