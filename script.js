"use strict";

// text animation

let textTag = document.querySelector(".section1 h1");
let text = textTag.innerText;

let splittedText = text.split("");

textTag.innerHTML = "";

splittedText.forEach((letter) => {
  if (letter === " ") {
    letter = "&nbsp";
  }
  textTag.innerHTML += `<span>${letter}</span>`;
});

let k = 0;
let interval = setInterval(() => {
  let spans = textTag.querySelectorAll("span");
  let singleSpan = spans[k];
  singleSpan.classList.add("fadeMove");
  k++;
  if (k === spans.length) {
    clearInterval(interval);
  }
}, 70);

// line animation

let border = document.querySelector(".border-line");
let animationWidth = 0;

window.addEventListener("scroll", () => {
  if (this.oldScroll > this.scrollY) {
    animationWidth -= 1;
  } else {
    animationWidth += 1;
  }

  if (animationWidth >= 100) {
    animationWidth = 100;
  }

  if (animationWidth <= 0) {
    animationWidth = 0;
  }

  border.style.width = animationWidth + "%";
  this.oldScroll = this.scrollY;

  // cars animation

  let sectionAnimation = document.querySelector(".section2 .images");
  let sectionPosition = sectionAnimation.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  let leftImg = document.querySelector(".slideFromLeft");
  let rightImg = document.querySelector(".slideFromRight");

  if (sectionPosition < screenPosition) {
    leftImg.classList.add("animated");
    rightImg.classList.add("animated");
  }
});
