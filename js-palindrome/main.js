//chiedo all'utente di inserire una parola e la 
//salvo in una variabile 
let word = prompt("Inserisci una parola");

//creo una funzione che calcolerà se la stringa è palindroma
function isPalindrome(str) {

    //salvo la lunghezza della stringa in una variabile
    let len = str.length;

    //salvo il punto di mezzo della stringa in una varibile
    let mid = Math.floor(len/2);

    //con il ciclo scorrso la stringa
    for ( var i = 0; i < mid; i++ ) {

        if (str[i] !== str[len - 1 - i]) {
            //non è palindroma
            alert("Non è palindroma");
            
            return str; 

        }

    }

    //è palindroma
    alert("E' palindroma");
    
    return str;
}

isPalindrome(word);