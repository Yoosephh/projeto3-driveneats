function ativarBotaoFinal() {
    const comidaEscolhida = document.querySelector('.comida .opcao-selecionada');
    const bebidaEscolhida = document.querySelector('.bebida .opcao-selecionada');
    const sobremesaEscolhida = document.querySelector('.sobremesa .opcao-selecionada');
    const botao = document.querySelector('.button');
    if(comidaEscolhida && bebidaEscolhida && sobremesaEscolhida) {
        botao.classList.remove('button')
        botao.classList.add('finalizar');
        botao.innerHTML= "Finalizar pedido"
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
        if (pratoEscolhido !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null) {
            let precoPrato = parseFloat(pratoEscolhido.dataset.value);
            let precoBebida = parseFloat(bebidaEscolhida.dataset.value);
            let precoSobremesa = parseFloat(sobremesaEscolhida.dataset.value);
            let precoTotal = precoBebida + precoPrato + precoSobremesa;
            console.log(precoTotal);
        }
    }
