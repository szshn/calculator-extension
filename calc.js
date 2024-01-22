// import stack from "./stack";
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const op1 = ["+", "-"];
const op2 = ["×", "÷", "^"];
const allowed = digits.concat(op1, op2);

const toPostfix = (equation) => {
  let output = [];
  let op_stack = [];

  for (let i = 0; i < equation.length; i++) {
    const char = equation[i];
    if (!allowed.includes(char)) {
      return [];
    }

    if (digits.includes(char)) {
      // is a multi-digit number
      if (output.length > 0 && i !== 0 && digits.includes(equation[i - 1])) {
        const new_num = Number(output.pop()) * 10 + Number(char);
        output.push(new_num);
      } else {
        output.push(char);
      }
    } else if (char === "(") {
      op_stack.push(char);
    } else if (char === ")") {
      // mismatched parentheses
      if (op_stack.length === 0) {
        return [];
      }

      while (op_stack.at(-1) !== "(") {
        if (op_stack.length === 0) {
          return [];
        }

        output.push(op_stack.at(-1));
        op_stack.pop();
      }

      if (op_stack.at(-1) === "(") {
        op_stack.pop();
      }
    }

    // operators
    else if (op1.includes(char)) {
      // higher or equal precedence
      const mayCompute = op2.includes(char)
        ? op1.concat(op2).includes(op_stack.at(-1))
        : op1.includes(op_stack.at(-1));

      while (op_stack.length !== 0 && mayCompute) {
        output.push(op_stack.at(-1));
        op_stack.pop();
      }
      op_stack.push(char);
    }
  }

  while (op_stack.length !== 0) {
    if (op_stack.top !== "(") {
      output.push(op_stack.at(-1));
    }
    op_stack.pop();
  }

  return output;
};

const evaluate = (equation) => {
  console.log(`Computing ${equation}...\n`);
  const postfix = toPostfix(equation);
  console.log(`Postfix: ${postfix}`);
  return postfix.length === 0 ? "Invalid input" : 23;
};

console.log(`\nResult: ${evaluate("12-3+1")}`);
