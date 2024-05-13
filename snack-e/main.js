// scrivere una funzione rimuoviDallaTesta() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne quello in prima posizione
const array = [1, 2, 3, 4];

console.log(rimuoviDallaTesta(array));

function rimuoviDallaTesta(array){
    let finalArray = [];
    for(let i=1; i < array.length; i++){
        finalArray.push(array[i]);
    }
    return finalArray;
}