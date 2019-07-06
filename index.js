// Your code here
function saturdayFun (activity= "roller-skate"){
  return `This Saturday, I want to ${activity}!`
};

function mondayWork (activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(w="*"){
    return function(adj = "special"){
      return `You are ${w}${adj}${w}!`
    }
}

const Calculator =　{
   add: function(a,b){
    return a + b
  },
  subtract: function(a,b){
    return a - b
  },
  multiply: function(a,b){
    return a*b
  },
  divide: function(a,b){
    return a/b
  }
}

function actionApplyer(int, arr){
  let result = int

  if (arr.length === 0){
    result
  }else {
    for(let i=0; i<arr.length; i++){
      result = arr[i](result)
    }
  }
  return result
}
