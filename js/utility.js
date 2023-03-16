/**
 * Function called by the submit of the wordSubmit button, that will define the result string of the palidrome div using the IsPalidrome function.
 */
function CheckPalidrome(){
    let word = document.getElementById("word").value;
    let result = '';
    if(!word)
        result = "Inserisci una parola valida!";
    else if(IsPalidrome(word))
        result = "La parola inserita è palindroma!";
    else
        result = "La parola inserita non è palindroma!";
    document.getElementById("palidromeResult").innerText = result;
}

/**
 * Function used to check if a passed string is palidrome.
 * @param {string} word Word to be checked.
 * @returns Returns true if the word is palidrome, false otherwise.
 */
function IsPalidrome(word){
    for(let i=0; i<parseInt(word.length/2); i++){
        if(word[i] != word[word.length-1-i])
        return false;
    }
    return true;
}

function CheckEvenOdd(){
    let isEven = document.getElementById("evenOddSelect").value == "even";
    let num = parseInt(document.getElementById("number").value);
    let numToCheck = num + GetRandomInt(5,1);
    let isEvenRes = IsEven(numToCheck);
    let result = '';
    if(isNaN(num))
        result = "Inserisci un numero valido!";
    else if((isEven && isEvenRes) || (!isEven && !isEvenRes))
        result = "Hai vinto!";
    else
        result = "Hai perso!";
    document.getElementById("evenOddResult").innerText = result;
    if(!isNaN(num))
        document.getElementById("numberGenerated").innerText = "Numero totale generato: " + numToCheck;
}

function IsEven(num){
    return num % 2 == 0;
}

/**
 * Function that will generate a random int
 * @param {bigint} max Max value of the interval
 * @param {bigint} min Min value of the interval
 * @returns {bigint} Generated random int value
 */
function GetRandomInt(max,min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}