# Projeto de Testes de API com Cypress

Este projeto contém testes automatizados para a API [Serverest API]. Ele utiliza o Cypress para realizar requisições HTTP e validar as respostas, garantindo o correto funcionamento dos endpoints da API.

## Visão Geral

O objetivo deste projeto é automatizar os testes da API, verificando o comportamento dos endpoints em diferentes cenários, como retornos de sucesso (2xx), erros de cliente (4xx) e erros de servidor (5xx). 

## Tecnologias Utilizadas

*   [Node.js](https://nodejs.org/) 
*   [npm](https://www.npmjs.com/) 
*   [Cypress](https://www.cypress.io/) 


## Pré-requisitos

*   Certifique-se de ter o Node.js e o npm instalados.

## Instalação

1.  Clone este repositório:

    ```bash
    git clone 'https://github.com/tielefernandes/desafio-ntt-ambev-api.git'
    ```

2.  Instale as dependências:

    ```bash
    npm install 
    ```

## Configuração

*   **`cypress.config.js`:** Este arquivo contém as configurações do Cypress, incluindo o `baseUrl` para a API.

    ```javascript
    const { defineConfig } = require("cypress");

    module.exports = defineConfig({
      e2e: {
        baseUrl: '(https://serverest.dev)', // URL base da API
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
      },
    });
    ```


## Executando os Testes

```bash
npx cypress run 
```
___

Made with ❤️ by Tica