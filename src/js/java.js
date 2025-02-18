/*  COM EXEMPLOS E ANOTAÇÕES

Objetivo 1 - quando clicarmos na seta  de avançar temos que mostrar o proximo cartão da lista
    - passo 1 - dar um jeito de  pegar o elemento html da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário da seta avançar
        - passo 3 - fazer aparecer o proximo cartão da lista
        - passo 4 - buscar o cartão que esta selecionado e esconder

Objetivo 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    - passo 1 - dar um jeito de  pegar o elemento html da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário da seta voltar
        - passo 3 - fazer aparecer o cartão anterior da lista
        - passo 4 - buscar o cartão que esta selecionado e esconder
*/

const btnAvancar = document.getElementById("btn-avancar"); // PASSO 1 - obj1
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0; //const nao muda, let é variavel (var não usa mais) 

btnAvancar.addEventListener("click", function () {  // PASSO 2 - obj1
    // console.log("clicou no botão") >>> para testar se quando clica aparece a msg;
    // console.log(cartoes[1].classlist); >>> para pegar a lista de classes do cartao
    if(cartaoAtual === cartoes.length - 1) { //para não dar erro quando chegar no ultomo cartão
        return;
    }

    const cartaoSelecionado = document.querySelector(".selecionado"); // PASSO 4 - obj1
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado"); 
});

btnVoltar.addEventListener("click", function () {  

    if(cartaoAtual === 0) return; 

    const cartaoSelecionado = document.querySelector(".selecionado"); 
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});




/* metodo gpt 

document.addEventListener("DOMContentLoaded", () => {
    const btnAvancar = document.getElementById("btn-avancar");
    const btnVoltar = document.getElementById("btn-voltar");
    const cartoes = document.querySelectorAll(".cartao");
    let cartaoAtual = 0;

    function esconderCartaoSelecionado() {
        document.querySelector(".selecionado").classList.remove("selecionado");
    }

    function mostrarCartao(indice) {
        cartoes[indice].classList.add("selecionado");
    }

    btnAvancar.addEventListener("click", () => {
        if (cartaoAtual < cartoes.length - 1) {
            esconderCartaoSelecionado();
            cartaoAtual++;
            mostrarCartao(cartaoAtual);
        }
    });

    btnVoltar.addEventListener("click", () => {
        if (cartaoAtual > 0) {
            esconderCartaoSelecionado();
            cartaoAtual--;
            mostrarCartao(cartaoAtual);
        }
    });
});  */
