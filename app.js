import { evaluate } from "./calc.js";

/* TODO
 * Apply corner cases
 * Parse and compute result
 * line1 and line2 control between seeing first result and starting second input
 */

const line1 = document.getElementById("line1"); // also acts as history
const line2 = document.getElementById("line2");
const no0 = document.getElementById("no0");
const no1 = document.getElementById("no1");
const no2 = document.getElementById("no2");
const no3 = document.getElementById("no3");
const no4 = document.getElementById("no4");
const no5 = document.getElementById("no5");
const no6 = document.getElementById("no6");
const no7 = document.getElementById("no7");
const no8 = document.getElementById("no8");
const no9 = document.getElementById("no9");
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
const ans = document.getElementById("ans");
const eq = document.getElementById("eq");

const parCount = {
  left: 0,
  right: 0,
};

let typing = true;

const addInput = (a) => {
  if (!typing) {
    line1.innerText = line2.value;
    typing = true;
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    const op = ["+", "-", "*", "/", "^"];

    if (digits.includes(a)) {
      line2.value = "";
    }
  }
  line2.value += String(a);
  line2.focus();
};

const getResult = () => {
  if (line2.value !== "") {
    const result = evaluate(line2.value); // temporary
    line1.innerText = line2.value;
    line2.value = result;
    line2.focus();
  }
  typing = false;
};

no0.addEventListener("click", () => {
  addInput(0);
});
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
    line2.focus();
    return;
  }

  if (line2.value.at(-1) === "(") {
    parCount.left -= 1;
  } else if (line2.value.at(-1) === ")") {
    parCount.right -= 1;
  }
  line2.value = line2.value.slice(0, -1);
  line2.focus();
});
ac.addEventListener("click", () => {
  line2.value = "";
  parCount.left = 0;
  parCount.right = 0;
  line2.focus();
});
ans.addEventListener("click", () => {
  if (line1.innerText !== "") {
    addInput("Ans");
  }
});
eq.addEventListener("click", () => {
  getResult();
});

line2.addEventListener("keydown", (event) => {
  const character = event.key;
  console.log(character);
  const allowed = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "*",
    "/",
    "^",
  ];

  if (allowed.includes(character)) {
    addInput(character);
  } else if (character === "p") {
    addInput("π");
  } else if (character === "Backspace") {
    if (line2.value.length >= 4 && line2.value.at(-2) === "g") {
      line2.value = line2.value.slice(0, -4);
      parCount.left -= 1;
      line2.focus();
      return;
    }

    if (line2.value.at(-1) === "(") {
      parCount.left -= 1;
    } else if (line2.value.at(-1) === ")") {
      parCount.right -= 1;
    }
    line2.value = line2.value.slice(0, -1);
    line2.focus();
  } else if (character === "Enter") {
    getResult();
  }
});
