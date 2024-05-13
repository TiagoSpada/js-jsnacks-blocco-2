// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1
const array = [1, 2, 3, 4, 5, 7]
const elementToFind = 2;
console.log(`la posizione dell'elemento ${elementToFind} è nella posizione ${trovaIndice(array, elementToFind)}`);

function trovaIndice(array, elementToFind){
    let i=0;
    while(array[i] !== undefined){
        if(array[i] === elementToFind){
            return i;
        }
        i++;
    }
    return -1;
}