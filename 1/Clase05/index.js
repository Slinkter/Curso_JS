let arr5 = [`hola`,`amigos`,`de form`];
console.log(arr5);
//5.4
'hola mama'.split('') // <-- devuelve las letras en un array 

'hola mama'.split('').reverse()

'hola mama'.split('').reverse().join('')

const func_reverseText = string =>{
    return string.split('').reverse().join('');
}

let arr2 = ['A','Z','F'] // ordena letras
arr2.sort();
arr2.sort().reverse();

let arr3 = [45,32,222,2,407,98,10,66,1];// ordena números
arr3.sort((a,b)=> a-b);


// 5.5
arr3.join(',') // convierte un array en un String separado por comas

let number2 = [99,89,40];
arr3.concat(number2) // crea una array temporal junto 

// 5.6
arr3.indexOf(1); // busca la posición en el array siempre cuando existe sino no existe devuel -1
arr3.find( x => x> 100); //necesita una funcion para buscar un valor o los valores
arr3.findIndex(x => x > 100) // solo posicion del elemento que cumpla la posicion






