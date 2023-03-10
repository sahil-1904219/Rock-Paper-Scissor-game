// console.log(88);
// let pScore = 0;
// let cScore = 0;
// const hand = document.getElementsByClassName("paperButton");
// const hand = document.querySelector(".paperButton");
const matche = document.querySelector(".match");
const chooseOptio = document.querySelector(".choose-option");
// hand.addEventListener("click", () => {
//   chooseOptio.classList.add("fadeOut");
//   matche.classList.add("fadeIn");
//   console.log(99);
// });

const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  // const startGame = () => {
  //   const playBtn = document.querySelector(".intro button");
  //   const introScreen = document.querySelector(".intro");
  //   const match = document.querySelector(".match");

  //   playBtn.addEventListener("click", () => {
  //     introScreen.classList.add("fadeOut");
  //     match.classList.add("fadeIn");
  //   });
  // };
  //Play Match
  const playMatch = () => {
    const stoneButton = document.querySelector(".stoneButton");
    const scissorButton = document.querySelector(".scissorButton");
    const paperButton = document.querySelector(".paperButton");
    const options = document.querySelectorAll(".options div");
    const outerCircle1 = document.querySelector(".outerCircle1");
    const outerCircle2 = document.querySelector(".outerCircle2");
    // const playerHand = document.querySelector(".player-hand");
    // const computerHand = document.querySelector(".computer-hand");
    const yhand = document.querySelectorAll(".yourImage");
    const phand = document.querySelectorAll("pcImage");
    // const hands = document.querySelectorAll(".hands img");
    //Computer Options
    const computerOptions = ["rock", "paper", "scissor"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        chooseOptio.classList.add("fadeOut");
        matche.classList.add("fadeIn");
        console.log(99);
      });
    });

    //Computer Choice
    // const computerNumber = Math.floor(Math.random() * 3);
    // const computerChoice = computerOptions[computerNumber];
  };
  playMatch();
};

//start the game function
game();
