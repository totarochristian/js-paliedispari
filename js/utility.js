
function CheckPalidrome(){
    let word = document.getElementById("word");
    let result = '';
    if(!word)
        result = "Inserisci una parola valida!";
    else if(IsPalidrome(word))
        result = "La parola inserita è palindroma!";
    else
        result = "La parola inserita non è palindroma!";
    document.getElementById("palidromeResult").innerText = result;
}