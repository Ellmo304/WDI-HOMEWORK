
var userRequest = prompt("Hello, welcome to the Calculator. What would you like to do today? Enter 'b' for basic sum, 'a' for advanced sum, 'm' for mortgage calculation or 'i' for bmi calculation!");


switch(true) {
  case(userRequest === "b") : var basicCalculator = prompt("Please choose an operation. Enter 'a' for addition, 's' for subtraction, 'm' for multiply or 'd' for division!")
  break;
  case(userRequest === "a") : var advancedCalcuator = prompt("Please choose an operation. Enter 's' for square root or 'p' for powers!")
  break;
  case(userRequest === "m") : var mortgageCalculator = prompt("Please enter amount!")
  break;
  case(userRequest === "i") : var bmiCalculator = prompt("Please enter ...")
  break;
  default: alert("Please enter either 'b', 'a', 'm' or 'i' to continue")
}

switch(true) {
  case(basicCalculator === "a") : var num1 = parseFloat(prompt("Please enter first number to add!")); var num2 = parseFloat(prompt("Please enter second number to add!"));
  alert("Your answer is " + (num1 + num2))
  break;
  case(basicCalculator === "s") : var num3 = parseFloat(prompt("Please enter starting number!")); var num4 = parseFloat(prompt("Please enter number to subtract!"));
  alert("Your answer is " + (num3 - num4))
  break;
  case(basicCalculator === "m") : var num5 = parseFloat(prompt("Please enter first number to multiply!")); var num6 = parseFloat(prompt("Please enter second number to multiply!"));
  alert("Your answer is " + (num5 * num6))
  break;
  case(basicCalculator === "d") : var num7 = parseFloat(prompt("Please enter starting number!")); var num8 = parseFloat(prompt("Please enter number to divide by!"));
  alert("Your answer is " + (num7 / num8))
  break;
}

switch(true) {
  case(advancedCalcuator === "s") : var s1 = parseFloat(prompt("Find the square root of?"));
  var a1 = parseFloat(Math.sqrt(s1)); alert("Your answer is " + a1)
  break;
  case(advancedCalcuator === "p") : var p1 = parseFloat(prompt("Enter starting number!")); var p2 = parseFloat(prompt("To the power of?"));
  var a2 = parseFloat(Math.pow(p1,p2)); alert("Your answer is " + a2)
  break;
}
