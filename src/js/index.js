/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - remover a classe do modo-escuro do body
        - passo 7 - trocar a imagem do botão de alterar tema pra sol
*/
alert("Seja bem-vindo ao meu projeto POKÉMON!");


const  botaoAlterador = document.getElementById("botao-alterador");

console.log(botaoAlterador);

// passo 2 

const body = document.querySelector("body");
const footer = document.querySelector("footer");
const imagemBotaoLua = document.querySelector(".imagem-botao");

//passo 3

botaoAlterador.addEventListener("click", () => {

     //objetivo 2 (passo 6(antes por causa da variavel))
  const modoEscuroAtivo = body.classList.contains("modo-escuro");
  const footerModoEscuroAtivo = footer.classList.contains("modo-escuro");
  
  if (modoEscuroAtivo, footerModoEscuroAtivo){
    //passo 7
    body.classList.remove("modo-escuro")
    footer.classList.remove("modo-escuro"); 
    imagemBotaoLua.setAttribute("src", "./src/imagens/sun.png")
  }

  else{

   
  //passo 4
    body.classList.add("modo-escuro");
    footer.classList.add("modo-escuro");
  //passo 5
  imagemBotaoLua.setAttribute("src", "./src/imagens/moon.png")


}
});


