const palavra = 'Matheus Henrique Ribas de Souza / Dev-Front-End';
const velocidade = 100; // tempo de atraso em milissegundos

function escreverPalavra() {
  let index = 0;
  function adicionarLetra() {
    if (index < palavra.length) {
      document.getElementById('palavra').innerHTML += palavra.charAt(index);
      index++;
      setTimeout(adicionarLetra, velocidade);
    }
  }
  adicionarLetra();
}

function iniciarAnimacao() {
  document.getElementById('palavra').innerHTML = '';
  escreverPalavra();
}
