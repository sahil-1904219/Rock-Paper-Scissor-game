const matche = document.querySelector(".match");
const chooseOptio = document.querySelector(".choose-option");

const stoneButton = document.querySelector(".stoneButton");
const scissorButton = document.querySelector(".scissorButton");
const paperButton = document.querySelector(".paperButton");
const options = document.querySelectorAll(".options div");
// const outerCircle1 = document.getElementsByClassName(".outerCircle1");
const outerCircle1 = document.querySelector(".outerCircle1");
const outerCircle2 = document.querySelector(".outerCircle2");
const yhand = document.querySelector(".yourImage");
const phand = document.querySelector(".pcImage");
const agains = document.querySelector(".against");
const playButtonn = document.querySelector(".playbutton");
const game = () => {
  let pScore = 0;
  let cScore = 0;
  //Play Match
  const computerOptions = ["rock", "paper", "scissor"];
  const computerColors = [" #0074B6", "#FFA943", "rgba(189, 0, 255, 1)"];
  const playMatch = () => {
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice

        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(this.id);
        console.log(computerChoice);
        // setTimeout(() => {
        //Here is where we call compare hands
        // chooseOptio.classList.add("fadeOut");
        chooseOptio.style.animation = "fadeOut ease";
        matche.style.animation = "fadeIn";
        //   $(".choose-option").fadeOut();
        matche.classList.add("fadeIn");
        //   $(".match").fadeIn(2000);
        compareHands(this.id, computerChoice);
        //Update Images
        // }, 2000);
      });
    });
    playButtonn.addEventListener("click", () => {
      chooseOptio.classList.add("fadeIn");
      //   $(".choose-option").fadeOut();
      matche.classList.add("fadeOut");
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const decisionText = document.querySelector(".decisionText");
    const pcolours = computerColors[computerOptions.indexOf(playerChoice)];
    const ccolours = computerColors[computerOptions.indexOf(computerChoice)];
    phand.src = `./assets/${computerChoice}.png`;
    yhand.src = `./assets/${playerChoice}.png`;
    outerCircle1.style.borderColor = `${pcolours}`;
    outerCircle2.style.borderColor = `${ccolours}`;
    // console.log(colours);

    // console.log(colour);
    //Checking for a tie

    if (playerChoice === computerChoice) {
      decisionText.textContent = "TIE UP";
      //   agains.classList.add("fadeOut");
      agains.innerHTML = "";
      //   against.fadeOut("slow");
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissor") {
        decisionText.textContent = "YOU WIN";
        pScore++;
        // updateScore();
        return;
      } else {
        decisionText.textContent = "YOU LOST";
        cScore++;
        // updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissor") {
        decisionText.textContent = "YOU LOST";
        cScore++;
        // updateScore();
        return;
      } else {
        decisionText.textContent = "YOU WIN";
        pScore++;
        // updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissor") {
      if (computerChoice === "rock") {
        decisionText.textContent = "YOU LOST";
        cScore++;
        // updateScore();
        return;
      } else {
        decisionText.textContent = "YOU WIN";
        pScore++;
        // updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  //   startGame();
  playMatch();
};

//start the game function
game();
