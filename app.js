// declaring variables
const line1 = document.querySelector("output");
const line2 = document.getElementById("text");
const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const no3 = document.getElementById("no3");
const no4 = document.getElementById("no4");
const no5 = document.getElementById("no5");
const no6 = document.getElementById("no6");
const no7 = document.getElementById("no7");
const no8 = document.getElementById("no8");
const no9 = document.getElementById("no9");
const no0 = document.getElementById("no0");
const dp = document.getElementById("dp");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
const pow = document.getElementById("pow");
const del = document.getElementById("del");
const ac = document.getElementById("ac");
const lpar = document.getElementById("lpar");
const rpar = document.getElementById("rpar");
const pi = document.getElementById("pi");
const log = document.getElementById("log");

const parCount = {
  left: 0,
  right: 0,
};
function addInput(a) {
  line2.value += String(a);
}
/* TODO
 * Move the individual condition to addInput
 * Add keyboard event listeners
 * Add ans and = buttons
 */

// event listeners for buttons
no1.addEventListener("click", () => {
  addInput(1);
});
no2.addEventListener("click", () => {
  addInput(2);
});
no3.addEventListener("click", () => {
  addInput(3);
});
no4.addEventListener("click", () => {
  addInput(4);
});
no5.addEventListener("click", () => {
  addInput(5);
});
no6.addEventListener("click", () => {
  addInput(6);
});
no7.addEventListener("click", () => {
  addInput(7);
});
no8.addEventListener("click", () => {
  addInput(8);
});
no9.addEventListener("click", () => {
  addInput(9);
});
no0.addEventListener("click", () => {
  addInput(0);
});
dp.addEventListener("click", () => {
  if (line2.value.at(-1) !== ".") {
    addInput(".");
  }
});
plus.addEventListener("click", () => {
  if (line2.value.at(-1) !== "+") {
    addInput("+");
  }
});
minus.addEventListener("click", () => {
  if (line2.value.at(-1) !== "-") {
    addInput("-");
  }
});
mult.addEventListener("click", () => {
  if (line2.value !== "" && line2.value.at(-1) !== "×") {
    addInput("×");
  }
});
div.addEventListener("click", () => {
  if (line2.value !== "" && line2.value.at(-1) !== "÷") {
    addInput("÷");
  }
});
pow.addEventListener("click", () => {
  if (line2.value !== "" && line2.value.at(-1) !== "^") {
    addInput("^");
  }
});
lpar.addEventListener("click", () => {
  addInput("(");
  parCount.left += 1;
});
rpar.addEventListener("click", () => {
  if (parCount.left > parCount.right) {
    addInput(")");
    parCount.right += 1;
  }
});
pi.addEventListener("click", () => {
  addInput("π");
});
log.addEventListener("click", () => {
  addInput("log(");
  parCount.left += 1;
});
del.addEventListener("click", () => {
  if (line2.value.length >= 4 && line2.value.at(-2) === "g") {
    line2.value = line2.value.slice(0, -4);
    parCount.left -= 1;
    return;
  }

  if (line2.value.at(-1) === "(") {
    parCount.left -= 1;
  } else if (line2.value.at(-1) === ")") {
    parCount.right -= 1;
  }
  line2.value = line2.value.slice(0, -1);
});
ac.addEventListener("click", () => {
  line2.value = "";
  parCount.left = 0;
  parCount.right = 0;
});
