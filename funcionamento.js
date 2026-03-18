




function soma() {
    let resultado = 0;
    let n1 =  Number(document.getElementById("n1").value);
    let n2 = Number (document.getElementById("n2").value);

    resultado = n1 + n2;
    console.log(resultado);
    document.getElementById("Resultado").innerHTML = resultado;
}

function sub() {
 let resultado = 0;
    let n1 =  Number(document.getElementById("n1").value);
    let n2 = Number (document.getElementById("n2").value);

    resultado = n1 - n2;
    document.getElementById("Resultado").innerHTML = resultado;
console.log(resultado);
}
function div() {
 let resultado = 0;
    let n1 =  Number(document.getElementById("n1").value);
    let n2 = Number (document.getElementById("n2").value);

    if (n2 === 0) {
        alert("resultado inexistente")
    }
    resultado = n1 / n2;
    document.getElementById("Resultado").innerHTML = resultado;
console.log(resultado);
}
function mult() {
 let resultado = 0;
    let n1 =  Number(document.getElementById("n1").value);
    let n2 = Number (document.getElementById("n2").value);

    resultado = n1 * n2
    document.getElementById("Resultado").innerHTML = resultado;
console.log(resultado);
}
