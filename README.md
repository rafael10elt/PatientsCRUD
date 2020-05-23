# Patients CRUD

## - O projeto é uma API REST desenvolvida em NodeJS, capaz de criar, atualizar, excluir e ler (CRUD) dados da entidade Patients.
_________________________________________________________________________

### Passo 1: Clonar o projeto
### Passo 2: Após clonar o projeto, abrir o terminal e inserir o comando:
### npm install
### Esse comando irá instalar os pacotes.
### Passo 3: Para inicializar o projeto, inserir no terminal o camando:
### npm start
### Passo 4: Acessar a API pelo endereço: http://localhost:3333/api/patients/
### Passo 5: Para realizar ações na aplicação, é necessário seguir o padrão de
### requisições em HTTP:
### GET /api/patients  ( Mostrar todos os pacientes registrados. )
### GET /api/patients/:id ( Mostrar os dados de um paciente específico, baseando-se pela chave id. )
### POST /api/patients  ( Adicionar um novo paciente. )
### PUT /api/patients/:id  ( Alterar os dados de um paciente especificado via id.)
### DELETE /api/patients/:id  ( Deletar os dados de um paciente especificado via id.)
_________________________________________________________________________

## - Pacotes instalados no projeto:
### npm install express
### npm install nodemon -D
### npm install cors
### npm install knex --save
### npx knex init
### npm install sqlite3

_________________________________________________________________________

### - Para realização dos testes de funcionamento das requisições, foi utilizado o
###  aplicativo de Design Plataform e REST Client Open Source: Insomnia
### Para download do Insomnia: https://insomnia.rest/download/