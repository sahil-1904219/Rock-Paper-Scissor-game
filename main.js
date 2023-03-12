const matche = document.querySelector(".match");
const chooseOptio = document.querySelector(".choose-option");
const stoneButton = document.querySelector(".stoneButton");
const scissorButton = document.querySelector(".scissorButton");
const options = document.querySelectorAll(".options div");
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
const yscore = document.querySelector(".yscore");
const cscore = document.querySelector(".cscore");
const rule1 = document.querySelectorAll(".rule1");
let pScore = 0;
let cScore = 0;
// localStorage.setItem("pscore", pScore.toString());
// localStorage.setItem("cscore", cScore.toString());
// let Pscore = parseInt(localStorage.getItem("pscore"));
// let Cscore = parseInt(localStorage.getItem("cscore"));
// yscore.textContent = Pscore;
// cscore.textContent = Cscore;
let bool = false;
const game = () => {
  let Pscore = parseInt(localStorage.getItem("pscore"));
  let Cscore = parseInt(localStorage.getItem("cscore"));
  yscore.textContent = Pscore;
  cscore.textContent = Cscore;
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
        chooseOptio.style.opacity = "0";
        matche.style.opacity = "1";
        wholeRule.style.opacity = "0";
        compareHands(this.id, computerChoice);
      });
    });
  };

  const cutRule = () => {
    wholeRule.style.opacity = "0";
  };

  Cut.addEventListener("click", cutRule);
  const getscore = () => {
    let Pscore = parseInt(localStorage.getItem("pscore"));
    let Cscore = parseInt(localStorage.getItem("cscore"));
    pScore = Pscore;
    cScore = Cscore;
  };
  const updateScore = () => {
    localStorage.setItem("pscore", pScore.toString());
    localStorage.setItem("cscore", cScore.toString());
    let Pscore = parseInt(localStorage.getItem("pscore"));
    let Cscore = parseInt(localStorage.getItem("cscore"));
    yscore.textContent = Pscore;
    cscore.textContent = Cscore;
  };

  playButtonn.addEventListener("click", () => {
    chooseOptio.style.opacity = "1";
    matche.style.opacity = "0";
    next.style.opacity = "0";
    ruleText.innerHTML = "RULES";
    wholeRule.style.opacity = "0";
    ywinner.style.opacity = "0";
    bool = false;
  });

  function Hurrah() {
    if ((bool = true)) {
      location.replace("assets/Hurrah Page/index.html");
    } else {
      rule.addEventListener("click", rulePopup);
    }
  }

  const compareHands = (playerChoice, computerChoice) => {
    const decisionText = document.querySelector(".decisionText");
    const pcolours = computerColors[computerOptions.indexOf(playerChoice)];
    const ccolours = computerColors[computerOptions.indexOf(computerChoice)];
    phand.src = `./assets/${computerChoice}.png`;
    yhand.src = `./assets/${playerChoice}.png`;
    outerCircle1.style.borderColor = `${pcolours}`;
    outerCircle2.style.borderColor = `${ccolours}`;

    if (playerChoice === computerChoice) {
      decisionText.textContent = "TIE UP";
      agains.innerHTML = "";
      playText.style.left = " 49.5%";
      decisionText.style.left = "46.3%";
      playText.innerHTML = "REPLAY";
      pwinner.style.opacity = "0";
      ywinner.style.opacity = "0";
      next.style.opacity = "0";
      ruleText.innerHTML = "RULES";
      bool = false;
      rule.addEventListener("click", rulePopup);
      return;
    }

    //Check for Rock

    if (playerChoice === "rock") {
      if (computerChoice === "scissor") {
        decisionText.textContent = "YOU WIN";
        decisionText.style.left = "44.7%";
        playText.style.left = " 47.8%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "0";
        ywinner.style.opacity = "1";
        next.style.opacity = "1";
        ruleText.innerHTML = "NEXT";
        bool = true;
        next.addEventListener("click", rulePopup);
        rule.addEventListener("click", Hurrah);
        getscore();
        pScore++;
        updateScore();
        return;
      } else {
        decisionText.textContent = "YOU LOST";
        decisionText.style.left = "44%";
        playText.style.left = " 47.8%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "1";
        ywinner.style.opacity = "0";
        next.style.opacity = "0";
        ruleText.innerHTML = "RULES";
        bool = false;
        rule.addEventListener("click", rulePopup);
        getscore();
        cScore++;
        updateScore();
        return;
      }
    }

    //Check for Paper

    if (playerChoice === "paper") {
      if (computerChoice === "scissor") {
        decisionText.textContent = "YOU LOST";
        decisionText.style.left = "44%";
        playText.style.left = " 47.8%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "1";
        ywinner.style.opacity = "0";
        next.style.opacity = "0";
        ruleText.innerHTML = "RULES";
        bool = false;
        rule.addEventListener("click", rulePopup);
        getscore();
        cScore++;
        updateScore();
        return;
      } else {
        decisionText.textContent = "YOU WIN";
        decisionText.style.left = "44.7%";
        playText.style.left = " 47.8%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "0";
        ywinner.style.opacity = "1";
        next.style.opacity = "1";
        ruleText.innerHTML = "NEXT";
        bool = true;
        next.addEventListener("click", rulePopup);
        rule.addEventListener("click", Hurrah);
        getscore();
        pScore++;
        updateScore();
        return;
      }
    }

    //Check for Scissors

    if (playerChoice === "scissor") {
      if (computerChoice === "rock") {
        decisionText.textContent = "YOU LOST";
        decisionText.style.left = "44%";
        playText.style.left = " 47.8%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "1";
        ywinner.style.opacity = "0";
        next.style.opacity = "0";
        ruleText.innerHTML = "RULES";
        bool = false;
        rule.addEventListener("click", rulePopup);
        getscore();
        cScore++;
        updateScore();
        return;
      } else {
        decisionText.textContent = "YOU WIN";
        decisionText.style.left = "44.7%";
        playText.style.left = " 47.8%";
        playText.innerHTML = "PLAY AGAIN";
        agains.innerHTML = "AGAINST PC";
        pwinner.style.opacity = "0";
        ywinner.style.opacity = "1";
        next.style.opacity = "1";
        ruleText.innerHTML = "NEXT";
        bool = true;
        next.addEventListener("click", rulePopup);
        rule.addEventListener("click", Hurrah);
        getscore();
        pScore++;
        updateScore();
        return;
      }
    }
  };

  playMatch();
};

game();
