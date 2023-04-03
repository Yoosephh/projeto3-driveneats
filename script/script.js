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
        const comidaEscolhida = document.querySelector(".comida .opcao-selecionada");
        const bebidaEscolhida = document.querySelector(".bebida .opcao-selecionada");
        const sobremesaEscolhida = document.querySelector(
          ".sobremesa .opcao-selecionada"
        );
        const botao = document.querySelector(".button");
        if (botao != null) {
          if (comidaEscolhida && bebidaEscolhida && sobremesaEscolhida) {
            botao.classList.remove("button");
            botao.classList.add("finalizar");
            botao.innerHTML = "Finalizar pedido";
          }
        }
        listaAll();
      }
      
      function escolherItem1(seletor) {
        const itemEscolhido = document.querySelector(".comida .opcao-selecionada");
        const spanElement = document.querySelector(seletor);
        const value1 = spanElement.dataset.value;
      
        if (itemEscolhido !== null) {
          itemEscolhido.classList.remove("opcao-selecionada");
        }
        const novoItemEscolhido = document.querySelector(seletor);
        novoItemEscolhido.classList.toggle("opcao-selecionada");
      
        ativarBotaoFinal();
        return value1;
      }
      
      function escolherItem2(seletor) {
        const spanElement = document.querySelector(seletor);
        const value2 = spanElement.dataset.value;
        const itemEscolhido = document.querySelector(".bebida .opcao-selecionada");
      
        if (itemEscolhido !== null) {
          itemEscolhido.classList.remove("opcao-selecionada");
        }
        const novoItemEscolhido = document.querySelector(seletor);
        novoItemEscolhido.classList.toggle("opcao-selecionada");
      
        ativarBotaoFinal();
        return value2;
      }
      
      function escolherItem3(seletor) {
        const spanElement = document.querySelector(seletor);
        const value3 = spanElement.dataset.value;
        const itemEscolhido = document.querySelector(".sobremesa .opcao-selecionada");
        if (itemEscolhido !== null && ionIcon !== null) {
          itemEscolhido.classList.remove("opcao-selecionada");
        }
        const novoItemEscolhido = document.querySelector(seletor);
        novoItemEscolhido.classList.toggle("opcao-selecionada");
      
        ativarBotaoFinal();
        return value3;
      }
      
      function calcularPreco() {
        const pratoEscolhido = document.querySelector(".comida .opcao-selecionada");
        const bebidaEscolhida = document.querySelector(".bebida .opcao-selecionada");
        const sobremesaEscolhida = document.querySelector(
          ".sobremesa .opcao-selecionada"
        );
      
        if (
          pratoEscolhido !== null &&
          bebidaEscolhida !== null &&
          sobremesaEscolhida !== null
        ) {
          let precoPrato = parseFloat(pratoEscolhido.dataset.value);
          let precoBebida = parseFloat(bebidaEscolhida.dataset.value);
          let precoSobremesa = parseFloat(sobremesaEscolhida.dataset.value);
          let precoTotal = (precoBebida + precoPrato + precoSobremesa).toFixed(2);
          console.log(precoTotal);
        }
      }
      
      function confirmOrder() {
        const pedidoFinal = document.querySelector(".confirma-pedido");
        pedidoFinal.style.display = "block";
      }
      
      function cancelOrder() {
        const pedidoFinal = document.querySelector(".confirma-pedido");
        pedidoFinal.style.display = "none";
      }
      
      function listaAll() {
        let valorTotal = 0;
        const selectedItems = document.querySelectorAll(".opcao-selecionada");
      
        selectedItems.forEach((element) => {
          const preco = element.dataset.value;
          valorTotal += Number(preco);
        });
      
        const comidaEscolhida = document.querySelector(".comida .opcao-selecionada");
        const bebidaEscolhida = document.querySelector(".bebida .opcao-selecionada");
        const sobremesaEscolhida = document.querySelector(
          ".sobremesa .opcao-selecionada"
        );
      
        const comidaSelecionadaNomeElemento = document.querySelector(
          ".pratoConfirma .nomePrato"
        );
        const comidaSelecionadaValorElemento = document.querySelector(
          ".pratoConfirma .precoPrato"
        );
      
        const bebidaSelecionadaNomeElemento = document.querySelector(
          ".bebidaConfirma .nomeBebida"
        );
        const bebidaSelecionadaValorElemento = document.querySelector(
          ".bebidaConfirma .precoBebida"
        );
      
        const sobremesaSelecionadaNomeElemento = document.querySelector(
          ".sobremesaConfirma .nomeSobremesa"
        );
        const sobremesaSelecionadaValorElemento = document.querySelector(
          ".sobremesaConfirma .precoSobremesa"
        );
      
        const valorTotalElemento = document.querySelector(".total .valorTotal");
      
        if (comidaEscolhida != null) {
          const nomeComida = comidaEscolhida.dataset.name;
          const precoComida = comidaEscolhida.dataset.value;
          comidaSelecionadaNomeElemento.innerHTML = nomeComida;
          comidaSelecionadaValorElemento.innerHTML = `R$ ${precoComida}`;
        }
        if (bebidaEscolhida != null) {
          const nomeBebida = bebidaEscolhida.dataset.name;
          const precoBebida = bebidaEscolhida.dataset.value;
          bebidaSelecionadaNomeElemento.innerHTML = nomeBebida;
          bebidaSelecionadaValorElemento.innerHTML = `R$ ${precoBebida}`;
        }
        if (sobremesaEscolhida != null) {
          const nomeSobremesa = sobremesaEscolhida.dataset.name;
          const precoSobremesa = sobremesaEscolhida.dataset.value;
          sobremesaSelecionadaNomeElemento.innerHTML = nomeSobremesa;
          sobremesaSelecionadaValorElemento.innerHTML = `R$ ${precoSobremesa}`;
        }
        if (valorTotalElemento != null) {
          valorTotalElemento.innerHTML = `R$ ${valorTotal.toFixed(2)}`;
        }
      }
      function finish() {
        let valorTotal = 0;
        const selectedItems = document.querySelectorAll(".opcao-selecionada");
      
        selectedItems.forEach((element) => {
          const preco = element.dataset.value;
          valorTotal += Number(preco);
        });
      
        const comidaEscolhida = document.querySelector(".comida .opcao-selecionada");
        const bebidaEscolhida = document.querySelector(".bebida .opcao-selecionada");
        const sobremesaEscolhida = document.querySelector(
          ".sobremesa .opcao-selecionada"
        );
      
        const comidaSelecionadaNomeElemento = document.querySelector(
          ".pratoConfirma .nomePrato"
        );
        const comidaSelecionadaValorElemento = document.querySelector(
          ".pratoConfirma .precoPrato"
        );
      
        const bebidaSelecionadaNomeElemento = document.querySelector(
          ".bebidaConfirma .nomeBebida"
        );
        const bebidaSelecionadaValorElemento = document.querySelector(
          ".bebidaConfirma .precoBebida"
        );
      
        const sobremesaSelecionadaNomeElemento = document.querySelector(
          ".sobremesaConfirma .nomeSobremesa"
        );
        const sobremesaSelecionadaValorElemento = document.querySelector(
          ".sobremesaConfirma .precoSobremesa"
        );
      
        const nomeComida = comidaEscolhida.dataset.name;
        comidaSelecionadaNomeElemento.innerHTML = nomeComida;
      
        const nomeBebida = bebidaEscolhida.dataset.name;
        bebidaSelecionadaNomeElemento.innerHTML = nomeBebida;
      
        const nomeSobremesa = sobremesaEscolhida.dataset.name;
      
        const pedido = `Olá, gostaria de fazer o pedido:%0A- Prato: ${nomeComida}%0A- Bebida: ${nomeBebida}%0A- Sobremesa: ${nomeSobremesa}%0A%0ATotal: R$${valorTotal.toFixed(
          2
        )}`;
      
        const final = encodeURIComponent(pedido);
        window.open(`https://wa.me/5547988570233?text=${final}`);
      }
      const btnPodePedir = document.querySelector(".btnPodePedir");
      btnPodePedir.addEventListener("click", finish);
      