/*Função para abrir modal ao apertar o botão.*/
function abrirModal() {
  const modal =
    document.getElementById(
      "janela-modal"
    ); /*Variável constante sem possibilidade de alteração. */
  modal.classList.add("abrir");

  /*Evento de click no botão da janela modal.*/
  modal.addEventListener("click", (e) => {
    /*addEventListener - É para adicionar um evento dinâmicamente.*/
    /*Estrutura condicional IF e ELSE.*/
    if (e.target.id == "fechar" || e.target.id == "janela-modal") {
      modal.classList.remove("abrir");
    }
  });
}
