
function criptografar(string){
  
  const resultado1 = string
  .replaceAll("a", "ai")
  .replaceAll("e", "enter")
  .replaceAll("i","imes")
  .replaceAll("o", "ober")
  .replaceAll("u", "ufat")

  return resultado1;
}

function descriptografar(string) {
  const resultado2 = string
    .replaceAll("ufat", "u")
    .replaceAll("ober", "o")
    .replaceAll("imes", "i")
    .replaceAll("enter", "e")
    .replaceAll("ai", "a");

  return resultado2;
}

function atualizarConteudoResultado(texto) {
  const elementoResultado = document.querySelector(".conteiner__texto__resultado");
  elementoResultado.value = texto;  // Usar .value para atualizar o conteúdo de uma textarea
}


const textareaElement = document.querySelector(".conteiner__input");
const conteudoTextarea = textareaElement.value;

const botaoCriptografar = document.querySelector(".conteiner__botoes__cripto");
botaoCriptografar.addEventListener("click", function() {
  const textareaElement = document.querySelector(".conteiner__input");
  const conteudoTextarea = textareaElement.value;
  
  const textoOriginal = conteudoTextarea;
  const textoCriptografado = criptografar(textoOriginal);
  
  // Atualiza o conteúdo do elemento com o texto criptografado
  atualizarConteudoResultado(textoCriptografado);
});

const botaoDescriptografar = document.querySelector(".conteiner__botoes__descripto");
botaoDescriptografar.addEventListener("click", function() {
const textareaElement = document.querySelector(".conteiner__input");
  const conteudoTextarea = textareaElement.value;
  
  const textoCriptografado = conteudoTextarea;
  const textoDescriptografado = descriptografar(textoCriptografado);
  
  // Atualiza o conteúdo do elemento com o texto descriptografado
  atualizarConteudoResultado(textoDescriptografado);
});

function substituirCaracteresInvalidos(texto) {
  
  const textoSemAcentos = texto
    .replaceAll(/[áàãâä]/g, 'a')
    .replaceAll(/[éèêë]/g, 'e')
    .replaceAll(/[íìîï]/g, 'i')
    .replaceAll(/[óòõôö]/g, 'o')
    .replaceAll(/[úùûü]/g, 'u')
    .replaceAll(/[ç]/g, 'c')
    .toLowerCase();

  const textoModificado = textoSemAcentos.replace(/[^a-z0-9\s]/g, '');

  return textoModificado;
}

function atualizarConteudoResultado(texto) {
  const elementoResultado = document.querySelector(".conteiner__texto__resultado");
  const textoModificado = substituirCaracteresInvalidos(texto);
  elementoResultado.value = textoModificado;
}

function copiarTexto(){
  const textareaElement = document.querySelector(".conteiner__texto__resultado");
  const conteudoTextarea = textareaElement.value;

  
  navigator.clipboard.writeText(conteudoTextarea).then(function() {
    console.log('Texto copiado com sucesso!');
    alert('Texto copiado para a área de transferência!');
}).catch(function(err) {
    console.error('Erro ao copiar texto: ', err);
});
}
  

function hideImg(){
    document.getElementById("imgchat").style.display = "none";
  }