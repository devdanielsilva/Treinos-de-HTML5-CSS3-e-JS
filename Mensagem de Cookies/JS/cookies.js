var msgCookies = document.getElementById("cookies-msg");
function aceito() {
  localStorage.lgpd = "sim";
  msgCookies.classList.remove("mostrar");
}

/*Abaixo é para verificação para saber se tem ou não, algum valor dentro nosso localStorage. */

/*Se lê assim: localStorage + o nome do seu localStorage + dois sinais de igual, que se lê como recebe == + o valor que você declarou no seu localStorage. 

Se localStorage com o nome de lgpd, possuir o valor sim, queremos que aconteça algo. */
if (localStorage.lgpd == "sim") {
  msgCookies.classList.remove("mostrar"); /*Remove a classe mostrar. */
} else {
  msgCookies.classList.add(
    "mostrar"
  ); /*Mostrar ou deixar em evidência a mensagem em caso de não possuir valor no localStorage.. */
}

/*Nesse arquivo JS vamos trabalhar com localStorage. Que é uma forma de guardar dados dentro da memória do navegador. 

localStorage.nomeAleatório="Qualquer dado/mensagem." junto com o nome que você quer, é escrito sempre assim.

Quando o usuário clicar no botão aceito, queremos que um determinado valor seja guardado na memória do nosso navegador e depois disso, faremos uma verificação para quando tiver um valor dentro dessa memória, não vai aparecer a mensagem. 

Para trabalhar com localStorage, precisaremos dar um nome para essa memória que vai guardar algum valor.

Por causa da LGPD, é obrigatório ter essa mensagem de aceitar os cookies.

Quando o usuário clicar no botão para aceitar os cookies, queremos que a mensagem se feche. Para isso vamos remover uma classe dinâmicamente.

Com a estrutura if, se existe algum valor no localStorage, a classe será removida. Senão existir valor no localStorage, vai mostrar a mensagem. Ouseja, vai adicionar a classe mostrar sempre que não tiver nehum valor no localStorage.lgpd*/
