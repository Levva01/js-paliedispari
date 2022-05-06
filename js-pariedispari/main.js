//faccio scegliere all'utente fra pari e dispari
let choice = prompt("Pari o dispari?");
let bool;

//true = pari; false = dispari;
if(choice === "Pari" || choice === "pari" || choice === "PARI"){
    bool = true;
} else if(choice === "Dispari" || choice === "dispari" || choice === "DISPARI") {
    bool = false;
} else {
    alert("Ricaricare la pagina ed inserire 'pari' o 'dispari'");
}

//numero utente da 1 a 5
let numUtente = Number(prompt("Inserisci un numero da 1 a 5"));
let numComputer;
//numero casuale computer da 1 a 5

//funzione che genera un numero casuale da 1 a 5
function randomNum(n){
    return n = Math.floor(Math.random() * 5) + 1;
}


//assegno il numero random
numComputer = randomNum(numComputer);
console.log(numComputer);

let somma = numUtente + numComputer;

//funzione per pari o dispari
function isEven(somma){
    if(somma % 2 === 0){
        return true;
    } else {
        return false;
    }
}


if(isEven(somma) == true && bool == true){
    console.log("Utente ha vinto");
} else if (isEven(somma) == false && bool == false){
    console.log("Utente ha vinto");
} else {
    console.log("Computer ha vinto");
}