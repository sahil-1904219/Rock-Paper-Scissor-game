const playbutton = document.querySelector(".playbutton");
const Cut = document.querySelector(".Cut");
const wholeRule = document.querySelector(".wholeRule");
const rule1 = document.querySelector(".rule1");
function mainpage() {
  wholeRule.style.opacity = "0";
  location.replace("../../index.html");
}
const cutRule = () => {
  wholeRule.style.opacity = "0";
};
const rulePopup = () => {
  wholeRule.style.opacity = "1";
};
playbutton.addEventListener("click", mainpage);
rule1.addEventListener("click", rulePopup);
Cut.addEventListener("click", cutRule);
