/*
let comidaEscolhida = " "
let bebidaEscolhida = " "
let sobremesaEscolhida = " "

function ativarBotaoFinal() {
    const botao = document.querySelector('.button');
    if(comidaEscolhida && bebidaEscolhida && sobremesaEscolhida) {
        botao.classList.remove('button')
        botao.classList.add('finalizar');
        botao.innerHTML= "Fechar pedido"
    }
}

function escolherItem1(comidaEscolhida) {
    if(comidaEscolhida != null ) {
        comidaEscolhida.classList.remove('opcao-selecionada');
    };
    console.log(comidaEscolhida)
    const spanElement = document.querySelector()
    const value1 = spanElement.dataset.value
    comidaEscolhida.classList.add('opcao-selecionada')

    ativarBotaoFinal()
    return value1
    };

function escolherItem2(bebidaEscolhida) {
    
    if(bebidaEscolhida != null ) {
        bebidaEscolhida.classList.remove('opcao-selecionada');
    };
    bebidaEscolhida = document.querySelector('.bebida .opcao-selecionada');
    const spanElement = document.querySelector(bebidaEscolhida)
    const value2 = spanElement.dataset.value

    const novoItemEscolhido = document.querySelector(bebidaEscolhida)
    novoItemEscolhido.classList.toggle('opcao-selecionada')

    ativarBotaoFinal()
    return value2
    };

function escolherItem3(sobremesaEscolhida) {
    if(sobremesaEscolhida != null ) {
        sobremesaEscolhida.classList.remove('opcao-selecionada');
    };
    sobremesaEscolhida = document.querySelector('.sobremesa .opcao-selecionada');
    const spanElement = document.querySelector(sobremesaEscolhida)
    const value3 = spanElement.dataset.value

    const novoItemEscolhido = document.querySelector(sobremesaEscolhida)
    novoItemEscolhido.classList.toggle('opcao-selecionada')

    ativarBotaoFinal()
    return value3
    };
function calcularPreco() {
    if (comidaEscolhida != null && bebidaEscolhida != null && sobremesaEscolhida != null) {
        let precoComida = parseFloat(comidaEscolhida.dataset.value);
        let precoBebida = parseFloat(bebidaEscolhida.dataset.value);
        let precoSobremesa = parseFloat(sobremesaEscolhida.dataset.value);
        let precoTotal = precoBebida + precoComida + precoSobremesa;
        console.log(precoTotal.toFixed(2));
        }
    }
    */

function ativarBotaoFinal() {
    const comidaEscolhida = document.querySelector('.comida .opcao-selecionada');
    const bebidaEscolhida = document.querySelector('.bebida .opcao-selecionada');
    const sobremesaEscolhida = document.querySelector('.sobremesa .opcao-selecionada');
    const botao = document.querySelector('.button');
    if(botao != null){
        if(comidaEscolhida && bebidaEscolhida && sobremesaEscolhida) {
            botao.classList.remove('button')
            botao.classList.add('finalizar');
            botao.innerHTML= "Finalizar pedido"
        }
    }
        
}

function escolherItem1(seletor) {
        const itemEscolhido = document.querySelector('.comida .opcao-selecionada')
        const spanElement = document.querySelector(seletor)
        const value1 = spanElement.dataset.value

        if(itemEscolhido !== null ) {
            itemEscolhido.classList.remove('opcao-selecionada');
        }
        const novoItemEscolhido = document.querySelector(seletor)
        novoItemEscolhido.classList.toggle('opcao-selecionada')

        ativarBotaoFinal()
        return value1
    };

function escolherItem2(seletor) {
    const spanElement = document.querySelector(seletor)
    const value2 = spanElement.dataset.value
    const itemEscolhido = document.querySelector('.bebida .opcao-selecionada')

    if(itemEscolhido !== null ) {
        itemEscolhido.classList.remove('opcao-selecionada');
    }
    const novoItemEscolhido = document.querySelector(seletor)
    novoItemEscolhido.classList.toggle('opcao-selecionada')

    ativarBotaoFinal()
    return value2
};

function escolherItem3(seletor) {
    const spanElement = document.querySelector(seletor)
    const value3 = spanElement.dataset.value
    const itemEscolhido = document.querySelector('.sobremesa .opcao-selecionada')
    if(itemEscolhido !== null ) {
        itemEscolhido.classList.remove('opcao-selecionada');
    }
    const novoItemEscolhido = document.querySelector(seletor)
    novoItemEscolhido.classList.toggle('opcao-selecionada')

    ativarBotaoFinal()
    return value3
};
function calcularPreco() {
    const pratoEscolhido = document.querySelector('.comida .opcao-selecionada');
    const bebidaEscolhida = document.querySelector('.bebida .opcao-selecionada');
    const sobremesaEscolhida = document.querySelector('.sobremesa .opcao-selecionada');

    
    if((pratoEscolhido !== null) && (bebidaEscolhida !== null) && (sobremesaEscolhida !== null)) {
        let precoPrato = parseFloat(pratoEscolhido.dataset.value);
        let precoBebida = parseFloat(bebidaEscolhida.dataset.value);
        let precoSobremesa = parseFloat(sobremesaEscolhida.dataset.value);
        let precoTotal = (precoBebida + precoPrato + precoSobremesa).toFixed(2);
        console.log(precoTotal);
    }
}
/* ao executar a função calcularPreco(), mostrar a tela finaliza pedido.
    */