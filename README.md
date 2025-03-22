# API de Filmes

Uma API simples para demonstração de rotas usando Express.js

## 🚀 Como executar

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run start
```

## 📌 Rotas Disponíveis

### GET /

Rota principal que retorna uma mensagem de boas-vindas.

**Resposta:**

```json
"Olá, bem-vindo à minha API!"
```

![Rota Principal](caminho/para/sua/imagem1.png)

### GET /filmes

Retorna uma lista de filmes cadastrados.

**Resposta:**

```json
[
  {
    "id": 1,
    "name": "Auto da Compadecida",
    "description": "Filme de comédia"
  },
  {
    "id": 2,
    "name": "Vingadores",
    "description": "Filme de ação"
  },
  {
    "id": 3,
    "name": "O Poderoso Chefão",
    "description": "Filme de drama"
  }
]
```

![Rota Filmes](caminho/para/sua/imagem2.png)

## 🛠️ Tecnologias

- Node.js
- Express.js

## 📝 Licença

Este projeto está sob a licença MIT.
