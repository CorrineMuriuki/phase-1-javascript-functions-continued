// code your solution here
let saturdayFun= function(string = 'roller-skate') {
    return `This Saturday, I want to ${string}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("To a party"));
console.log(saturdayFun("To church"));

let mondayWork= function(string = 'go to the office') {
    return `This Monday, I will ${string}.`;
}
console.log(mondayWork());
console.log(mondayWork("Go to a Zoom meeting"));
console.log(mondayWork("Go to the factory"));

function wrapAdjective(string = "*"){
    return function xyz(defaultParam = "special"){
        return `You are ${string}${defaultParam}${string}!`
    }
}

wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"

