# Prova de Conceito 1

Essa prova de conceito é baseado no exemplo do repositório de exemplos do Webpack Module Federation. O exemplo original é [Dynamic System Host Example](https://github.com/module-federation/module-federation-examples/tree/master/dynamic-system-host).

## Componentes

### Shell

O Shell é a aplicação base responsável por carregar o componente remoto e renderizá-lo.

### Microfrontend

O Microfrontend é o componente remoto que será carregado pelo Shell, ele é uma aplicação React que é carregada como módulo remoto do Webpack Module Federation e incorporada na página por meio da tag customizada `<micro-frontend />`

## Execução

Para executar o projeto, basta executar o comando `npm install` ou `yarn` na raiz do projeto. E
após as dependências serem instaladas, executar o comando `npm start` ou `yarn start` para iniciar o projeto.

A aplicação Shell estará disponível em `http://localhost:3001`.
