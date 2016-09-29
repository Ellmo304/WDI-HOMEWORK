var result = 0;

var calculateClick = document.getElementById("calculateButton").addEventListener("click", collectInputs);

function collectInputs() {
  var firstNumber = +(document.getElementById("input-1").value);
  var secondNumber = +(document.getElementById("input-2").value);
  var operationSelector = document.getElementById("operator").value;

  if (operationSelector === "Add") {
    result = (firstNumber + secondNumber);
  }
  else if (operationSelector === "Subtract") {
    result = (firstNumber - secondNumber);
  }
  else if (operationSelector === "Multiply") {
    result = (firstNumber * secondNumber);
  }
  else if (operationSelector === "Divide") {
    result = (firstNumber / secondNumber);
  }
  else result = ("No operation!");

  document.getElementById("output").innerHTML = (result);

}



var clearCalculator = document.getElementById("clear").addEventListener("click", clearDisplay);

function clearDisplay() {
  document.getElementById("output").innerHTML = ("");
}
