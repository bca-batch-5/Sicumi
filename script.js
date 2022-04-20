"use strict";

const carous = document.querySelectorAll(".carous");
const btnRight = document.querySelector(".btn__right");
const btnLeft = document.querySelector(".btn__left");

let curSlide = 1;
const maxSlide = carous.length;

const addCarous = (slide) => {
  carous.forEach((el, i) => {
    el.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  addCarous(curSlide);
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  addCarous(curSlide);
};

addCarous(curSlide);

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
