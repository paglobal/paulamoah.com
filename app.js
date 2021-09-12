const texts = [
  'You can change the playback speed of this animation by tapping the button labelled "1x" above',
  "Keep tapping until you reach a desired speed.",
  "Hi there!",
  "Welcome to my corner of the internet.",
  "Make yourself at home!",
  "Sadly some things don't work yet.",
  "Like the links above if you're on a large screen or the links in the drawer menu if you're on a smaller screen.",
  'Aside from the one labelled "Newsletter".',
  "You can subscribe to my newsletter with that one.",
  "The social media links down below work fine though.",
  "Follow and connect with me everywhere!",
  "I'm not really an active social media person though.",
  "Working on changing that soon.",
  "You can also checkout my spotify playlist if you so desire.",
  "I'm still in the process of moving in so I'll be fixing up some things soon.",
  "And I'll spice up the place with a few more things every once in a while.",
  "Hope you'll be able visit from time to time.",
  "Been a nice chat!",
  "Have a nice day!",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let speedButton;
let speedFactorArray;
let speedFactorIndex;
const lT = 100;
const pT = 1500;
let letterTimeout = 200;
let paragraphTimeout = 1000;

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".animated-text p").innerHTML =
    letter + '<span class="cursor"></span>';
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, paragraphTimeout);
  } else {
    setTimeout(type, letterTimeout);
  }
})();

window.onload = function () {
  speedButton = document.querySelector(".speed-button");

  speedFactorArray = [1, 1.5, 2, 2.5, 3, 3.5, 4, 0.2, 0.5, 0.7];

  speedFactorIndex = 0;

  speedButton.addEventListener("click", clickHandler);
};

function clickHandler() {
  speedFactorIndex = speedFactorIndex + 1;

  if (speedFactorIndex >= speedFactorArray.length) {
    speedFactorIndex = 0;
  }

  paragraphTimeout = pT / speedFactorArray[speedFactorIndex];
  letterTimeout = lT / speedFactorArray[speedFactorIndex];

  speedButton.textContent = speedFactorArray[speedFactorIndex].toString() + "x";
}

//this handles outlines when user is tabbing and/or clicking
function handleFirstTab(e) {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
}

function handleTap(e) {
  document.body.classList.remove("user-is-tabbing");
  e.target.blur();
}

window.addEventListener("keydown", handleFirstTab);
document.addEventListener("touchend", handleTap);

/* Open when someone clicks on hamburger */
function openNav() {
  document.querySelector("nav .ul").style.width = "65vw";
  document.querySelector(".hamburger").classList.add("inactive");
  document.querySelector(".hamburger").classList.remove("active");
  document.querySelector(".close").classList.add("active");
  document.querySelector(".close").classList.remove("inactive");
}

/* Close when someone clicks on close */
function closeNav() {
  document.querySelector("nav .ul").style.width = "0";
  document.querySelector(".hamburger").classList.add("active");
  document.querySelector(".hamburger").classList.remove("inactive");
  document.querySelector(".close").classList.add("inactive");
  document.querySelector(".close").classList.remove("active");
}
