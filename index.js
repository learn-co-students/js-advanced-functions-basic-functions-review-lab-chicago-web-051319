// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity= "go to the office") {
  return `This Monday, I will ${activity}.`
};

function wrapAdjective(flair="*"){
  return function(par = "special"){
    return `You are ${flair}${par}${flair}!`;
  }
}


let Calculator = {
  add: (a, b) => (a + b),
  subtract: (a, b) => (a - b),
  multiply: (a, b) => (a * b),
  divide: (a, b) => (a/b)
};

function actionApplyer(a, arrFxn){
  let num = a;
  arrFxn.forEach(fxn => {num = fxn(num)});
  return num
}
