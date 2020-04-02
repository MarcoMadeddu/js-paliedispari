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
