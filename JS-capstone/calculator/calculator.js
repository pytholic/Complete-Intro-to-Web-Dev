let buffer = "0";
let runningTotal = 0; // keep track of current total
let previousOperator = null; // keep track of last operator in buffer
const screen = document.querySelector(".screen");

function buttonClick(value) {
  // console.log(value);
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(number) {
  /**
   * Function to handle numbers
   */
  // console.log("number");
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
  // console.log(buffer);
}

function handleMath(value) {
  if (buffer === 0) {
    // do nothing
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = value;
  buffer = "0"; // after hitting operator, screen should 0 temporarily
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }
}

function handleSymbol(symbol) {
  /**
   * Function to handle symbols
   */
  // console.log("symbol");
  // if (symbol === "C") buffer = "0";
  switch (symbol) {
    case "C":
      buffer = "0";
      break;
    case "=":
      if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null; // don't want to keep track of prev operator now
      buffer = String(runningTotal);
      runningTotal = 0;

      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function init() {
  /**
   * Initialization function.
   */
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

function rerender() {
  /**
   * Function to update the screen text
   */
  screen.innerText = buffer;
}

init();
