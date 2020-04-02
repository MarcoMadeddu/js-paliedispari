console.log("java is done!");

// chiedere all'utente di inserire una parola e creare una funzione per capire se la parola è palindroma

var parola = prompt("inserisci una parola");

var risultato = palindromo(parola);
console.log("la parola " + parola + " risulta essere " + risultato);

//definizione function

function palindromo(x) {
  var reverse = '';

  for (var i = x.length -1 ; i >= 0; i--){
    reverse += x[i];
  }

  if(x == reverse){

    return "palindroma";

  }else{

    return  "non palindroma";

  }

}

// //Pari e Dispari
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//dichiarazione varibiabili
var scelta = prompt("scegli pari o dispari");
var numUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
var numPc= random();
var somma = numUtente + numPc;
var esito = pariODispari(somma);


//controllo vincitore
if(scelta == esito){

  var vincitore = "Hai vinto!";

} else{

  var vincitore = "Hai perso!";

}
  console.log("Hai scelto: " + scelta + " con il numero: " + numUtente + " il numero del pc: " + numPc + " l'esito è: " + esito + " " + vincitore );


//genera numero al pc
function random(){
  var n = Math.floor((Math.random() * 5) + 1);
  return n;
}

//stabilisce pari o Dispari

function pariODispari (somma){

  if(somma % 2 == 0){

    return "pari";

  }else{

    return "dispari";

  }
}
