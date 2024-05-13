'use strict';

// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array

const array = [1, 2, 3, 4, 5, 6];
console.log(array);



console.log(`l'array ha ${contaElementi(array)} elementi`);

function contaElementi(array){
    let i = 0;
    while(array[i] !== undefined){
        i++;
    }
    return i;
}