// code your solution here
let defActivity = 'roller-skate'
function saturdayFun(activity){
    if (activity===undefined){
        return `This Saturday, I want to ${defActivity}!`
    }
    else{return `This Saturday, I want to ${activity}!`}
}
let defaultActivity = 'go to the office'
function mondayWork (activity){
    if (activity===undefined){
        return `This Monday, I will ${defaultActivity}.`
    }
    else{
        return `This Monday, I will ${activity}.`
    }

}
function wrapAdjective(visual="*"){
    return function(adj = "special"){
        return `You are ${visual}${adj}${visual}!`
    }
}