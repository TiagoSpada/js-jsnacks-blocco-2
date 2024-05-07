// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const array1 = ["1", "2", "3", "4", "5", "6"];
const array2 = ["1", "2", "3", "4", "5", "6", "7", "8"];
let arrayCorto;
console.log(array1);
console.log(array2);


    while(array2.length !== array1.length){
        if(array1.length > array2.length){
            arrayCorto = array2;
        }else if (array2.length > array1.length) {
            arrayCorto = array1;
        }
        const ElementoAggiunto = prompt(`Aggiungi un elemento all'array`);
        arrayCorto.push(ElementoAggiunto)
    }

console.log("Adesso gli array hanno la stessa lunghezza");
console.log(array1 + " " + array1.length);
console.log(array2 + " " + array2.length);