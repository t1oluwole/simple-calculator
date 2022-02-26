// Previously stored values entered into the calculator.
let prevVal = "";

// New/current values entered into the calculator.
let newVal = "";

// This will display the results.
let resultVal = "";

// Store previous math operator clicked
let mathOperator = "";

// This only permits the decimal button being clicked ONCE. More than this will respond with 'false'.
let decimalClicked = false;

// This will store a value in the calculator's memory.
let valMemStored = "";

// Creating the functions and determining how they will work.

function numButPress(num) {
  // This checks if a number has already been pressed, if so, a new number being pressed will replace it.
  if (resultVal) {
    // Start a new new number
    newVal = num;
    // Reset to create a new result
    resultVal = "";
  } else {
    // Used to block multiple decimal points being used.
    if (num === ".") {
      if (decimalClicked != true) {
        newVal += num;
        decimalClicked = true;
      }
    } else {
      newVal += num;
    }
  }

  // Updated Entry in Display when a number is pressed.
  document.getElementById("entry").value = newVal;
}

function mathButPress(operator) {
  // In this we check if there was a previous calculation by seeing if resultVal exists.

  // If resultVal does not exist, the NEW value pressed is stored as a previous value for the next calculation
  if (!resultVal) {
    prevVal = newVal;
  } else {
    // If resultVal DOES exist, the value is then stored as a previous value.
    prevVal = resultVal;
  }

  // Restart creation of new number
  newVal = "";
  // Reset decimalClicked
  decimalClicked = false;
  // Store operator clicked
  mathOperator = operator;

  // Prepare entry for receiving new numbers
  resultVal = "";
  document.getElementById("entry").value = "";
}

function equalButPress() {
  // Reset decimalClicked
  decimalClicked = false;

  // Convert string numbers to floats
  prevVal = parseFloat(prevVal);
  newVal = parseFloat(newVal);

  // Perform calculations based on stored operator
  switch (mathOperator) {
    case "+":
      resultVal = prevVal + newVal;
      break;
    case "-":
      resultVal = prevVal - newVal;
      break;
    case "*":
      resultVal = prevVal * newVal;
      break;
    case "/":
      resultVal = prevVal / newVal;
      break;
    // If equals is pressed without any operator being used, the value remains the same.
    default:
      resultVal = newVal;
  }

  // Store the current value as the previous so that
  // I can except to next value in the calculation
  prevVal = resultVal;

  // Put the calculation result in the entry window
  document.getElementById("entry").value = resultVal;
}

// This clears everything BUT the memory.
function clearButPress() {
  prevVal = "";
  newVal = "";
  resultVal = "";
  mathOperator = "";
  decimalClicked = false;
  document.getElementById("entry").value = "0";
}

// The current value in the display window is now stored in Memory
function copyButPress() {
  valMemStored = document.getElementById("entry").value;
}

// If a value has been stored, it can be pasted into the display window by asssigning it as newVal
function pasteButPress() {
  if (valMemStored) {
    document.getElementById("entry").value = valMemStored;
    newVal = valMemStored;
  }
}
