# Documentação do Projeto de Simulação de Hamburgueria

## Visão Geral
Este projeto foi criado para simular um site de hamburgueria, com o objetivo de implementar funcionalidades e estilização utilizando React.JS e Styled Components. O projeto utilizou uma API para acessar a lista de produtos e permitiu a simulação de um carrinho de compras. A entrega também incluiu a responsividade da aplicação, garantindo um bom funcionamento em diferentes dispositivos.

## Funcionalidades Principais
O projeto incluiu as seguintes funcionalidades principais:

1. **Estilização**: A estilização foi uma parte essencial do projeto, implementada com a ajuda do Styled Components. A aplicação seguiu um design semelhante ao especificado no Figma e foi responsiva, adaptando-se a diferentes tamanhos de tela.

2. **Integração com a API**: Utilizando o React, os produtos foram buscados na API. A lógica para buscar os produtos foi implementada com o `useEffect`, garantindo que a lista de produtos estivesse disponível para exibição.

3. **Gerenciamento do Carrinho**: Foi implementada a lógica para adicionar e remover itens do carrinho. Os produtos no carrinho foram baseados na lista de produtos fornecida pela API. O projeto incluiu a exibição do total da compra e utilizou o `useEffect` para persistir os dados do carrinho no `localStorage`, garantindo que os dados fossem mantidos entre as sessões.

4. **Modal**: Um modal foi implementado para exibir detalhes do produto ou informações adicionais. O modal podia ser aberto e fechado de forma condicional, com base nas interações do usuário.

## Executando o Projeto
Para executar o projeto, siga estas etapas:

1. Clone o repositório do projeto em seu ambiente local.

2. Navegue até o diretório do projeto no terminal.

3. Execute o comando `npm install` para baixar as dependências do projeto.

4. Utilize o comando `npm start` para iniciar a aplicação no servidor de desenvolvimento.

5. Acesse a aplicação no seu navegador em [http://localhost:3000](http://localhost:3000).

Aproveite a oportunidade para personalizar a documentação do projeto, incluindo detalhes adicionais, explicando a estrutura dos componentes, estados, efeitos colaterais, fluxo de dados e qualquer outra informação relevante para outros desenvolvedores que possam colaborar com o projeto no futuro.
