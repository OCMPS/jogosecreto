let listaDeNumerosSorteados = [];
let limiteNumero = 10;
let numeroOculto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO')
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10')
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroOculto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto, com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroOculto)   {
            exibirTextoNaTela('p', 'o número é menor');
        } else {
            exibirTextoNaTela('p', 'o número é maior');  
     } 
     tentativas++;
     limparCampo();

    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * limiteNumero + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == limiteNumero){
        listaDeNumerosSorteados = [];
    }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
numeroOculto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
mensagemInicial();
document.getElementById('reiniciar').setAttribute('disable', true)
}