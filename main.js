const matche = document.querySelector(".match");
const chooseOptio = document.querySelector(".choose-option");

const stoneButton = document.querySelector(".stoneButton");
const scissorButton = document.querySelector(".scissorButton");
// const paperButton = document.querySelector(".paperButton");
const options = document.querySelectorAll(".options div");
// const outerCircle1 = document.getElementsByClassName(".outerCircle1");
const outerCircle1 = document.querySelector(".outerCircle1");
const outerCircle2 = document.querySelector(".outerCircle2");
const yhand = document.querySelector(".yourImage");
const phand = document.querySelector(".pcImage");
const agains = document.querySelector(".against");
const playButtonn = document.querySelector(".playbutton");
const playText = document.querySelector(".playText");
const pwinner = document.querySelector(".pwinner");
const ywinner = document.querySelector(".ywinner");
const next = document.querySelector(".next");
const ruleText = document.querySelector("#rule-text");
const Cut = document.querySelector(".Cut");
const wholeRule = document.querySelector(".wholeRule");
const rule = document.querySelector(".rule");
const game = () => {
  let pScore = 0;
  let cScore = 0;
  //Play Match
  //   matche.style.opacity = "0";
  const rulePopup = () => {
    wholeRule.style.opacity = "1";
  };
  rule.addEventListener("click", rulePopup);
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
        chooseOptio.style.opacity = "0";
        matche.style.opacity = "1";
        wholeRule.style.opacity = "0";
        // chooseOptio.style.animation = "fadeOut ease";
        // matche.style.animation = "fadeIn";
        //   $(".choose-option").fadeOut();
        // matche.classList.add("fadeIn");
        //   $(".match").fadeIn(2000);
        compareHands(this.id, computerChoice);
        //Update Images
        // }, 2000);
      });
    });
  };

  const cutRule = () => {
    wholeRule.style.opacity = "0";
  };
  Cut.addEventListener("click", cutRule);
  const updateScore = () => {
    const yscore = document.querySelector(".yscore");
    const cscore = document.querySelector(".cscore");
    console.log(pScore);
    console.log(cScore);
    yscore.textContent = pScore;
    cscore.textContent = cScore;
  };
  playButtonn.addEventListener("click", () => {
    chooseOptio.style.opacity = "1";
    matche.style.opacity = "0";
    next.style.opacity = "0";
    ruleText.innerHTML = "RULES";
    wholeRule.style.opacity = "0";
    // playMatch();
  });
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
      agains.innerHTML = "";
      playText.style.left = " 50%";
      playText.innerHTML = "REPLAY";
      pwinner.style.opacity = "0";
      ywinner.style.opacity = "0";
      next.style.opacity = "0";
      next.style.opacity = "0";
      ruleText.innerHTML = "RULES";
      rule.addEventListener("click", rulePopup);
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissor") {
        decisionText.textContent = "YOU WIN";
        playText.style.left = " 48.7%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "0";
        ywinner.style.opacity = "1";
        next.style.opacity = "1";
        ruleText.innerHTML = "NEXT";
        pScore++;
        updateScore();
        return;
      } else {
        decisionText.textContent = "YOU LOST";
        playText.style.left = " 48.7%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "1";
        ywinner.style.opacity = "0";
        next.style.opacity = "0";
        ruleText.innerHTML = "RULES";
        rule.addEventListener("click", rulePopup);
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissor") {
        decisionText.textContent = "YOU LOST";
        playText.style.left = " 48.7%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "1";
        ywinner.style.opacity = "0";
        next.style.opacity = "0";
        ruleText.innerHTML = "RULES";
        rule.addEventListener("click", rulePopup);
        cScore++;
        updateScore();
        return;
      } else {
        decisionText.textContent = "YOU WIN";
        playText.style.left = " 48.7%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "0";
        ywinner.style.opacity = "1";
        next.style.opacity = "1";
        ruleText.innerHTML = "NEXT";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissor") {
      if (computerChoice === "rock") {
        decisionText.textContent = "YOU LOST";
        playText.style.left = " 48.7%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "1";
        ywinner.style.opacity = "0";
        next.style.opacity = "0";
        ruleText.innerHTML = "RULES";
        rule.addEventListener("click", rulePopup);
        cScore++;
        updateScore();
        return;
      } else {
        decisionText.textContent = "YOU WIN";
        playText.style.left = " 48.7%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "0";
        ywinner.style.opacity = "1";
        next.style.opacity = "1";
        ruleText.innerHTML = "NEXT";
        pScore++;
        updateScore();
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
