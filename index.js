// Your code here
function saturdayFun(stuff="roller-skate"){
    return `This Saturday, I want to ${stuff}!`
}

let mondayWork = function (work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*") {
    return function(whatever="special"){
        return `You are ${flair}${whatever}${flair}!`
    }
}

const Calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
}

let actionApplyer = function(start, arr) {
    let a = start
  
    for (let i = 0; i < arr.length; i++ ){
      a = arr[i](a)
    }
  
    return a
  }
