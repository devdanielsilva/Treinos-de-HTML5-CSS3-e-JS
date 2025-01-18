var msgCookies = document.getElementById("cookies-msg");
function aceito() {
  localStorage.lgpd = "sim";
  msgCookies.classList.remove("mostrar");
}
/*Se lê assim: localStorage + o nome do seu localStorage + dois sinais de igual, que se lê como recebe == + o valor que você declarou no seu localStorage. 

Se localStorage com o nome de lgpd, possuir o valor sim, queremos que aconteça algo. */
if (localStorage.lgpd == "sim") {
  msgCookies.classList.remove("mostrar"); /*Remove a classe mostrar. */
} else {
  msgCookies.classList.add(
    "mostrar"
  ); /*Mostrar ou deixar em evidência a mensagem em caso de não possuir valor no localStorage.. */
}