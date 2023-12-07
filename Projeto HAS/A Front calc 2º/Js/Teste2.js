'use strict';

let botao = document.getElementById("Calc");
let botao2 = document.getElementById("Limpar");

botao.addEventListener('click', Calculo);
botao2.addEventListener('click', Limpar);

function Calculo(e) {
    e.preventDefault(); //para os valores n sairem da tela
    let Numero1 = parseFloat(document.getElementById('Numero1').value); //para as variaveis receber valores tipo Float
    let Numero2 = parseFloat(document.getElementById('Numero2').value);
    let Numero3 = parseFloat(document.getElementById('Numero3').value);
    let delta = Math.pow(Numero2, 2) - 4 * Numero1 * Numero3;
    document.getElementById("del").innerHTML = "Delta = " + delta;


    if (Numero2 === 0 || Numero3 === 0) {
        document.getElementById("Resultado").innerHTML = "Equação de 2º Grau incompleta";
        document.getElementById("del").innerHTML = "Delta = ..."

    }
    else if (Numero1 === 0) {
        document.getElementById("Resultado").innerHTML = "Esta é uma Equação de 1º Grau";
        document.getElementById("del").innerHTML = "Delta = ..."
    } else if (delta > 0) {
        let raiz1 = (-Numero2 + Math.sqrt(delta)) / (2 * Numero1);
        let raiz2 = (-Numero2 - Math.sqrt(delta)) / (2 * Numero1);
        document.getElementById("Resultado").innerHTML = "Primeira Raiz = " + raiz1 + "<br>" + "Segunda Raiz = " + raiz2;

    } else if (delta === 0) {
        let raizUnica = (-Numero2 + Math.sqrt(delta)) / (2 * Numero1);
        document.getElementById("Resultado").innerHTML = "Raiz única = " + raizUnica;

    } else if (delta < 0) {
        document.getElementById("Resultado").innerHTML = "Delta < (Menor) que  0, não há raiz.";
    }
}



function Limpar(e) { //config do botão limpar 
    document.getElementById('Numero1').value = ' ';
    document.getElementById('Numero2').value = ' ';
    document.getElementById('Numero3').value = ' ';
    document.getElementById('Resultado').innerHTML = null;
}
