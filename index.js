// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(special="special"){
        return `You are ${flair}${special}${flair}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

let Calculator = {
    add : function(a,b) {return a + b},
    subtract : function(a,b) {return a-b},
    multiply: function(a,b) {return a*b},
    divide: function(a,b){return a/b}
}

function actionApplyer(number, functionsArray){
    let num = number;
    for(let i=0; i < functionsArray.length; i++){
        num = functionsArray[i](num);
    }
    return num;
}