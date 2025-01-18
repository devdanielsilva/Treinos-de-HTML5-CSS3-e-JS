# Mensagem de Cookies com HTML5, CSS3 e JS <br>
## Informações sobre o documento HTML<br>
No documento HTML possui 3 div's.
* 1°Div: Div cookies-msg, que engloba outras 2 div's. 
* 2°Div: Div de cookies-txt contém o parágrafo de texto.
* 3°Div: Div de cookies-btn para o button, no início do button de o onclick="aceito()" , para chamar a função de aceito do cookies.

Contém links para os documentos CSS e o JS.<br>

## Informações sobre o documento CSS<br>
* Definição de variáveis no css.
* Arquivo de importação da fonte.
* Seletor de configuração geral.
* Seletor do Corpo do Site.
* Seletor com Div de mensagem e a Div do botão.
* Seletor para sempre que existir a classe mostra dentro da classe msg , vai aparecer a mensagem.
* Seletor da Div de mensagem e da Div do Texto.
* Seletor da Div de mensagem e da Div do botão.
* Seletor de Estilização do botão.
* Seletor de hover do botão para sensação de afundamento do botão.
* Para editar uma div ou elemento dentro de uma div que engloba outras div's. Primeiro chma a div principal até o nome da div ou elemento que você deseja estilizar. <br>

## Informações sobre o documento JS<br>
* Nesse arquivo JS vamos trabalhar com localStorage. Que é uma forma de guardar dados dentro da memória do navegador. 

* localStorage.nomeAleatório="Qualquer dado/mensagem." junto com o nome que você quer, é escrito sempre assim.

* Quando o usuário clicar no botão aceito, queremos que um determinado valor seja guardado na memória do nosso navegador e depois disso, faremos uma verificação para quando tiver um valor dentro dessa memória, não vai aparecer a mensagem. 

* Para trabalhar com localStorage, precisaremos dar um nome para essa memória que vai guardar algum valor. Se lê assim: localStorage

* Por causa da LGPD, é obrigatório ter essa mensagem de aceitar os cookies.

* *Se lê assim: localStorage + o nome do seu localStorage + dois sinais de igual, que se lê como recebe == + o valor que você declarou no seu localStorage. 

* Quando o usuário clicar no botão para aceitar os cookies, queremos que a mensagem se feche. Para isso vamos remover uma classe dinâmicamente.

* Se localStorage com o nome de lgpd, possuir o valor sim, queremos que aconteça algo. 

* Com a estrutura if, é para verificação, para saber se tem ou não, algum valor dentro nosso localStorage. Se existe algum valor no localStorage, a classe será removida. Senão existir valor no localStorage, vai mostrar a mensagem. Ou seja, vai adicionar a classe mostrar sempre que não tiver nehum valor no localStorage.lgpd .

