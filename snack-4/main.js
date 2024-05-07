// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const arrayCorto = ["1", "2", "3", "4", "5", "6"];
const arrayLungo = ["1", "2", "3", "4", "5", "6", "7", "8"];

console.log(arrayCorto);
console.log(arrayLungo);

// controllo quele array è più corto
if(arrayCorto.length > arrayLungo.length){
    // ciclo che si ripete fino a quando un array è minore dell'altro
    while(arrayLungo.length < arrayCorto.length){
        // chiedo un elemento all'utente
        const ArrayEl = prompt(`Aggiungi un elemento all'array 2`);
        // aggiungo l'elemento all'array
        arrayLungo.push(ArrayEl);
    }
}else if (arrayLungo.length > arrayCorto.length) {
    while(arrayCorto.length < arrayLungo.length){
        const ArrayEl = prompt("Aggiungi un elemento all'array 1");
        arrayCorto.push(ArrayEl);
    }
} else{
    alert("Gli array hanno già la stessa lunghezza")
}

console.log("Adesso gli array hanno la stessa lunghezza");
console.log(arrayCorto);
console.log(arrayLungo);