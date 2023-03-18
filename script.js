/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)

Referencia (mutavel) - array, object, function
*/

/*
    let a = 'Bruno'; 
    let b = a;
    Quando valamos que b = a em valores primitivos,
    o que acontece é que o valor b copiou o valor a,
    porém, se 'a' sofrer alteracao, o valor de b nao sera alterado, pois o valor de b
    copiou o valor de a 

    Quando valamos que b = a em valores de referencia,
    o que acontece é que o valor de b esta acompanhando o valor de a ou seja
    se o valor de a for modificado, o valor de b sera modificado tambem
*/

let a = [1, 2, 3];
//let b = a;

//Podemos copiar o valor de a para b utilizando a seguinte sintaxe : let b = [...a]  -> 

let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(a, c);

