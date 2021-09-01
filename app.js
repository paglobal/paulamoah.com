const texts = [
  'You can change the playback speed of this animation with the button labelled "1x" above',
  "Hi Laura!",
  "Glad you made it",
  "Welcome to my corner of the internet",
  "Hmm this is what I've been doing all day instead of learing oo",
  "Hmm I promise I'll learn tomorrow",
  "Anyways, the links at the top don't work aside from the newsletter one",
  "All the bottom links work though",
  "Please tell me what you think of the site and any suggestions you have to improve it",
  "And let me know if anything doesn't work the way it should",
  "Thanks!",
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

  document.querySelector(".animated-text p").innerHTML = letter;
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
