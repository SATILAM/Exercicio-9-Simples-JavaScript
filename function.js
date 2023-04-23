function inverterPalavras(str) {
  const palavras = str.split(' ');
  const resultado = [];
  
  for (let i = palavras.length - 1; i >= 0; i--) {
    resultado.push(palavras[i]);
  }
  
  return resultado.join(' ');
}

console.log(inverterPalavras('exemplo de string')); // Deve retornar 'string de exemplo'