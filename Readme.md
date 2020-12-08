

# BackEnd

## 🔨 Tecnologias

### 🗺️ Microserviços

<a href="#accounts-service"> - Serviço de Gestão Contas de Usuários</a> </br>
<a href="#contacts-service"> - Serviço de Gestão Contatos Cadastrados</a>
<a href="#list-service"> - Serviço de Gestão de Listass</a>
<a href="#messages-service"> - Serviço de Gestão das Mensagens</a>
<a href="#campaigns-service"> - Serviço de Gestão de Campanhas</a>


#### - Serviço de Gestão Contas de Usuários
 * ⚙️ Funcionalidades :
 * Criar Contas ( CRUD de Contas )
 * Retornar Conta com id específico
 * Autenticação através de uma Conta  

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




#### - Serviço de Gestão Contatos Cadastrados


#### - Serviço de Gestão de Listas


#### - Serviço de Gestão das Mensagens


#### - Serviço de Gestão de Campanhas
<a name="accounts-service"></a>Serviço de Gestão Contas de Usuários
