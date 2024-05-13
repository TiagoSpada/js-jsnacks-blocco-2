//scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola
const array = [1, 2, 3, 4];

stringa = stampa(array);

console.log(stringa);

function stampa(array){
    let i=0;
    let arrayString = '';
    while(array[i] !== undefined){
        arrayString += array[i]+', ';
        i++;
    }
    return arrayString.slice(0, -2);
}