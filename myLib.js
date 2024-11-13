function isBissextile (year){
    if (year%4 === 0 && year%100 !== 0) {
        return true;
    }
    if (year%400 === 0){
        return true;
    }
    return false;
}
const year = parseInt(prompt('Veuillez entrer une année :'));



function forceUserToEnterInteger(){
    let userInput =false
    while (!userInput){
            userInput = parseInt(prompt('Entrer un nombre entier :'));

        }
        return userInput;
}

console.log(forceUserToEnterInteger());
