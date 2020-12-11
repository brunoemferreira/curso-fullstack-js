// aqui fica a inicialização do App ajuda nos testes
import app from './app';

// Porta de funcionamento do serviço
// Traz a porta das configurações de ambiente
const port = parseInt(`${process.env.PORT}`)
app.listen(port, () => {
  console.log(`Running on port ${port} !!!`);
});
