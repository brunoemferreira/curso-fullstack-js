<h1 align="center">
    <img alt="mailshrimp" title="#mailshrimp" src="./assets/logo.png" />
</h1>

<h1 align="center">MAILSHRIMP - Email Marketing</h1>
<p align="center">Software SAAS Multi-Tenancy</p>

## BackEnd
### 📄 Descrição
<p>O MailShrimp é uma plataforma de email Marketing ( SAAS, multi-tenancy ) desenvolvida em Javascript, utilizando arquitetura de MicroServiços.</p>

### 🔨 Tecnologias

### 🗺️ Microserviços

<a href="#accounts-service"> - Serviço de Gestão Contas de Usuários</a> </br>
<a href="#contacts-service"> - Serviço de Gestão Contatos Cadastrados</a> </br>
<a href="#list-service"> - Serviço de Gestão de Listas</a> </br>
<a href="#messages-service"> - Serviço de Gestão das Mensagens</a> </br>
<a href="#campaigns-service"> - Serviço de Gestão de Campanhas</a> </br>

<a name="accounts-service"> <h4> ⚙️ Serviço de Gestão Contas de Usuários </h4></a> 
<p>Funcionalidades : </br>
   - Criação das Contas da Aplicação; </br>
   - Autenticação através de uma conta; </br>
</p>
 
```bash
// Estrutura de Pastas do Serviço
|- /backend/
  |- /accounts-service/
    |- /dist/
    |- /src/
      |- /routes/      // Guarda as rotas
      |- /controllers/ // É o meio de Campo entre as rotas e os models
      |- /models/      // Regras das Entidades da Aplicação 
      |-
      |-
      |-
    |- /test/
  |- .env              // Configurações do Projeto
  |- .env.example      // Arquivo de Template de configurações obrigatórias para o projeto              




// Pacotes Utilizados
- express
- body-parser
- helmet
- @types/node 
- @types/express
- dotenv-safe
- nodemon

```
> Formas de Executar o Projeto
 ```bash 
# Carrega o arquivo de ambiente na memória e roda a aplicação
$ node start

# Transpila o Typescript para o Javascript e sobe o Serviço 
$ npm run compile

# Executa o nodemon que fica olhando os arquivos ts e json atras de alterações se houver alterações ele recompila
# Ignora o pacote dist para evitar loop infinito de compilação 
# Ou seja deixa a aplicação no ar onde eu posso fazer quantas alterações eu quiser, que ele força a recompilação do projeto 
$ npm run dev
 ```

<a name="contacts-service"> <h4> ⚙️ Serviço de Gestão Contatos Cadastrados </h4></a> 


<a name="list-service"> <h4> ⚙️ Serviço de Gestão de Listas </h4></a> 


<a name="messages-service"> <h4> ⚙️ Serviço de Gestão das Mensagens </h4></a> 


<a name="campaigns-service"> <h4> ⚙️ Serviço de Gestão de Campanhas </h4></a> 


