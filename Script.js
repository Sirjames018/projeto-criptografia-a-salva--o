
function criptografar(string){
  
  const resultado1 = string
  .replaceAll("a", "ai")
  .replaceAll("e", "enter")
  .replaceAll("i","imes")
  .replaceAll("o", "ober")
  .replaceAll("u", "ufat")

  return resultado1;
}

function descriptografar(string){
  const resultado2 = string
  .replaceAll("ai", "a")
  .replaceAll("enter", "e")
  .replaceAll("imes","i")
  .replaceAll("ober", "o")
  .replaceAll("ufat", "u")

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