// scrivere una funzione rimuoviDallaCoda() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne l'ultimo
const array = [1, 2, 3, 4];

console.log(rimuoviDallaCoda(array));

function rimuoviDallaCoda(array){
    let finalArray = [];
    for(let i=0; i < array.length -1; i++){
        finalArray[i] = array[i];
    }
    return finalArray;
}