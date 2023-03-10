// console.log(88);
let pScore = 0;
let cScore = 0;
// const hand = document.getElementsByClassName("paperButton");
const hand = document.querySelector(".paperButton");
const chooseOptio = document.querySelector(".choose-option");
hand.addEventListener("click", () => {
  chooseOptio.classList.add("fadeOut");
  // match.classList.add("fadeIn");
  console.log(99);
});
