let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
exibirMensagensInicial();
function exibirMensagensInicial() {
    exibirTextoNaTela('h1' ,'jogo do numero secreto');
    exibirTextoNaTela('p' ,'escolha um numero entre 1 e 10');
}
exibirTextoNaTela('h1' ,'jogo do numero secreto');
exibirTextoNaTela('p' ,'escolha um numero entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' :
        'tentativa';
        let mensagemTentativas = `voce descobriu o numero secreto! com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute
        ('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p' , 'o numero secreto e menor');
        } else {
            exibirTextoNaTela('p' , 'o numero secreto e maior');

        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random()* numeroLimite +1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroEscolhido){
    listaDeNumerosSorteados = [];
}

  if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
  }

}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagensInicial();
    documente.getElementById('reiniciar').setAttribute('disabled' ,
    true)
}
















