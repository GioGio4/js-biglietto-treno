

// VARIABILI:

// Il prezzo del biglietto è definito in base ai km (0.21 € al km).
const price_km = 0.21;

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere.
let user_km = parseInt(prompt("Quanti chilometri vuoi fare?"));
console.log(typeof user_km);

// E l'età del passeggero.
let user_age = parseInt(prompt("Quanti anni hai?"));

// Prezzo totale del viaggio (esclusi sconti)
let total_price = ((user_km * price_km));

// Va applicato uno sconto del 20% per i minorenni.
let discount_young = ((total_price / 100) * 20);
let price_discount_young = ((total_price - discount_young));

// Va applicato uno sconto del 40% per gli over 65.
let discount_over = ((total_price / 100) * 40);
let price_discount_over = ((total_price - discount_over));


// STAMPA PREZZO FINALE 

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

if (user_age < 18) {
    document.getElementById("train_price").innerHTML = ("Il prezzo del tuo biglietto: €" + price_discount_young.toFixed(2));
}

else if (user_age > 65) {
    document.getElementById("train_price").innerHTML = ("Il prezzo del tuo biglietto: €" + price_discount_over.toFixed(2));
}

else {
    document.getElementById("train_price").innerHTML = ("Il prezzo del tuo bieglietto: €" + total_price.toFixed(2));
}