# API de E-commerce

Este projeto é uma API para gerenciar produtos de um e-commerce. Ele permite criar, listar, atualizar e deletar produtos. A API foi desenvolvida utilizando Node.js, Express e Prisma como ORM, e o **Thunder Client** foi utilizado para testar as requisições.

---

## 🚀 Funcionalidades

- **Listar todos os produtos**: `GET /products`
- **Buscar um produto por ID**: `GET /products/:id`
- **Criar um novo produto**: `POST /products`
- **Atualizar um produto existente**: `PUT /products/:id`
- **Deletar um produto**: `DELETE /products/:id`

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **Prisma**: ORM para manipulação do banco de dados.
- **SQLite**: Banco de dados utilizado no desenvolvimento.
- **Thunder Client**: Ferramenta para testar as requisições HTTP.

---

## 📦 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/pedro-ols/api_e-commerce.git
cd api-ecommerce
```

### 2. Instale as dependências
Certifique-se de que você tem o Node.js instalado. Em seguida, execute:

```bash
npm install
```

### 3. Configure o banco de dados
O projeto utiliza o Prisma como ORM. Para configurar o banco de dados, siga os passos abaixo:

### Crie o arquivo .env na raiz do projeto e adicione a URL do banco de dados:
```bash
DATABASE_URL="file:./dev.db"
```

### Gere o banco de dados e as migrações:
```bash
npx prisma migrate dev product init
```

### Inicie o servidor

```bash
npm run dev
```

## 🧪 Testando com Thunder Client
Abra o Thunder Client no Visual Studio Code.
Crie uma nova coleção chamada API E-commerce.
Adicione as requisições para as rotas mencionadas acima.
Envie as requisições e verifique as respostas.

## 📂 Estrutura do Projeto
```bash
api_e-commerce/
├── prisma/
│   ├── schema.prisma       # Configuração do Prisma
├── src/
│   ├── controllers/
│   │   └── productController.js  # Controladores das rotas
│   ├── models/
│   │   └── productModel.js       # Lógica de acesso ao banco de dados
│   ├── routes/
│   │   └── productRoutes.js      # Rotas da API
│   ├── prismaClient.js           # Configuração do Prisma Client
├── .env                          # Variáveis de ambiente
├── [package.json](http://_vscodecontentref_/0)                  # Dependências do projeto
```

## 🛡️ Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

## 📞 Contato
Se você tiver dúvidas ou sugestões, entre em contato pelo e-mail: pedro.o.santos7@aluno.senai.br