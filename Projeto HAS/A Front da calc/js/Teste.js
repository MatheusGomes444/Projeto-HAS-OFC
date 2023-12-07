const previousOperationText = document.querySelector("#Anteriro");
const currentOperationText = document.querySelector("#Atual");
const buttons = document.querySelectorAll("#Botão button");

class Calculos { //logica dos calculos
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = Anterior
        this.currentOperationText = Atual
        this.currentOperation = "" //é oq esta sendo digitado no momento
    }


    addDigit(Digito) {

        //Checa o Ponto
        if (Digito === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }
        //Adiciona os digitos na tela
        this.Atual = Digito
        this.updateScreen();
    }

    //processo de calculos
    processOperation(Operação) {
        //chegar se o valor esta vazio
        if (this.currentOperationText.innerText === "" && Operação != "C") {

            if (this.previousOperationText.innerText !== "") {

                //se caiu aqui ele vai trocar a operação
                this.chargeOperation(Operação);
            }
            return;
        }


        //Para saber o valor atual e anterior
        let OperaçãoValue;
        let Anterior = +this.previousOperationText.innerText.split(" ")[0];
        let Atual = +this.currentOperationText.innerText;

        switch (Operação) {

            case "+":
                OperaçãoValue = Anterior + Atual;
                this.updateScreen(OperaçãoValue, Operação, Atual, Anterior);
                break;

            case "-":
                OperaçãoValue = Anterior - Atual;
                this.updateScreen(OperaçãoValue, Operação, Atual, Anterior);
                break;

            case "/":
                OperaçãoValue = Anterior / Atual;
                this.updateScreen(OperaçãoValue, Operação, Atual, Anterior);
                break;

            case "*":
                OperaçãoValue = Anterior * Atual;
                this.updateScreen(OperaçãoValue, Operação, Atual, Anterior);
                break;

            case "DEL":
                this.OperaçãoDelet();
                break;

            case "CE":
                this.limpaylimpa();
                break;
            case "C":
                this.limpaTudo();
                break;
            case "=":
                this.igual();
                break;

            default:
                return;

        }
    }


    //Troca de valors da tela
    updateScreen(
        OperaçãoValue = null,
        Operação = null,
        Atual = null,
        Anterior = null
    ) {
        if (OperaçãoValue === null) {
            //ad o valor atual
            this.currentOperationText.innerText += this.Atual;
        } else {
            //checa se o valor anterior é zero, se for adciona o atual
            if (Anterior === 0) {
                OperaçãoValue = Atual;
            }
            //joga o numero atual pra cima
            this.previousOperationText.innerText = `${OperaçãoValue} ${Operação}`;
            this.currentOperationText.innerText = "";
        }
    }
    chargeOperation(Operação) {
        const mathOperations = ["*", "-", "/", "+"];

        if (!mathOperations.includes(Operação)) {
            return;
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + Operação;
    }
    //Apaga o ultimo digito
    OperaçãoDelet() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);

    }
    //limpa o atual
    limpaylimpa() {
        this.currentOperationText.innerText = " ";
    }
    //Limpa o de cima e o de baixo
    limpaTudo() {
        this.currentOperationText.innerText = " ";
        this.previousOperationText.innerText = " ";
    }
    //igual xD
    igual() {
        let Operação = this.previousOperationText.innerText.split(" ")[1];
        this.processOperation(Operação);
    }
}

const Calculos2 = new Calculos(previousOperationText, currentOperationText);

buttons.forEach((Butão) => { //Função dos botoes
    Butão.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            console.log(value)
            Calculos2.addDigit(value);
        }
        else {
            Calculos2.processOperation(value);
        }

    });
}); 