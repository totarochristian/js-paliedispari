
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
    console.log("fine");
}

function IsPalidrome(word){
    for(let i=0; i<parseInt(word.length/2); i++){
        if(word[i] != word[word.length-1-i])
        return false;
    }
    return true;
}