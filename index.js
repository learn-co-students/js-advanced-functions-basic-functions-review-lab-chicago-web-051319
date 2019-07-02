// Your code here
function saturdayFun(funThing = "roller-skate") {
  return `This Saturday, I want to ${funThing}!`;
}

let mondayWork = function (funThing = "go to the office") {
  return `This Monday, I will ${funThing}.`;
}

function wrapAdjective(wrapChar = "*") {
  return function (complement = "special") {
    return `You are ${wrapChar}${complement}${wrapChar}!`
  }
}

const Calculator = {
  add: function(num1, num2){
    return num1+num2
  },
  subtract: function(num1, num2){
    return num1-num2
  },
  multiply: function(num1, num2){
    return num1*num2
  },
  divide: function(num1, num2){
    return num1/num2
  },
}

function actionApplyer(starting, functions) {
    return functions.reduce( (total, element) =>{
      return element(total)
    },starting)
}
