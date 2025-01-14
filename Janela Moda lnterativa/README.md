
# Janela Modal Interativa
 Janela Modal Interativa com JavaScript.<br>

## Informações sobre o documento HTML
### Possuí 3 Div's 
* Div do botão para abrir a janela modal. No início da div adicionamos **onclick="abrirModal()"** pode ser antes da class="btn". <br> 
Serve para chamar a função de click, para quando houver o click no botão do modal.
* Div da janela modal.
* Dentro da div da janela modal, que tem uma div para o modal com o botão de fechamento do modal, o título, o parágrafo de texto.<br>

### Linkando arquivos
* Link para o documento CSS e um link para o do JS. <br>

## Informações sobre o documento CSS
* Seletor de configuração geral da página.
* Seletor do botão de abrir o modal.
* Seletor da Pseudo-classe Hover CSS.
* Seletor da janela modal.
* Seletor do modal com o texto.
* Seletor do botão de fechar o modal.
* Seletor da janela modal, quando houver o click no botão.
* Seletor de configuração do modal, quando clicar no botão e o modal for aberto.
* Seletor de configuração da animação do modal, quando clicar no botão.
<br>

## Informações sobre o documento JS
* Tem função para abrir o modal ao apertar o botão.
* Variável do const (Constante). A Variável constante não tem possibilidade de alteração.<br> 
E ela irá receber o **ID** da **janela modal** que por sua vez, possuí a **div modal** dentro dela tem o **título** e o **parágrafo de texto**. <br>
Dentro da **função** chamaremos a variável que definimos junto de **.classList** que serve podemos trabalhar adicionando e removendo classes no nosso modal.<br>
E como queremos abrir o nosso modal, iremos adicionar uma **classe dinâmicamente**, através do **modal.class.add('Aqui dentro vai o nome da classe que irá representar a abertura do modal. EX: abrir')**<br>
* Evento do tipo **Listener "click"**.
* modal.addEventListener "click", (e) =>  <br>
addEventListener - É para adicionar um evento dinâmicamente. Quando o evento click acontecer, ou seja, quando algo for clicado. <br>
Chamamos a constante modal junto com . ponto e junto de addEventListenner e junto de parêntese(Aqui dentro de parêntese, vamos dizer qual é o evento que  precisa acontecer, para que ocorra uma ação.) Ex: ('click')<br> 
Evento de click é o que vamos usar.<br>
* Dentro de parêntese () , vamos adicionar aspas duplas e dentro delas o nome do evento. Ex: 'click'<br>
Depois do nome adicionado do evento dentro das aspas duplas, colocaremos a vírgula , e parêntese (e). Esse e dentro de parêntese, é porque com os eventos do JavaScript.<br>
Depois do parêntese e o adicionado dentro dele, dar espaço e adiciona o => Igual Maior. Abre e fecha chaves, dentro de chaves vamos adicionar nossa estrutura condicional.
* Estrutura condicional do tipo **if & else**.
<br>
