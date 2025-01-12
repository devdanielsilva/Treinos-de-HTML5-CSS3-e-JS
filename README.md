
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
E como queremos abrir o nosso modal, iremos adicionar uma **classe dinâmicamente**, através do **modal.class.add('Aqui dentro vai o nome da classe que irá representar a abertura do modal. EX: abrir')**
* Evento do tipo **Listener "click"** .
* Estrutura condicional do tipo **if & else**.
<br>
