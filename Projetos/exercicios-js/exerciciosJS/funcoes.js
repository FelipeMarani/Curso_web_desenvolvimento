//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2)
imprimirSoma(2,10, 9, 4 , 2, 1 , 7)
imprimirSoma()

//função com Retorno
function soma(a, b=1){
    return a + b;
}

console.log(soma(2,6));
console.log(soma(2));