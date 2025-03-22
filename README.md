# API de Filmes

Uma API simples para demonstração de rotas usando Express.js

## Repositório

[Repositório GIT](https://github.com/marcelohoficial/dsi0015-atividade-pratica-1)

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

![Rota Navegador](https://github.com/marcelohoficial/dsi0015-atividade-pratica-1/blob/master/public/raiz-navegador.png?raw=true)
![Rota Insomnia](https://github.com/marcelohoficial/dsi0015-atividade-pratica-1/blob/master/public/raiz-insomnia.png?raw=true)

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

![Rota Navegador](https://github.com/marcelohoficial/dsi0015-atividade-pratica-1/blob/master/public/filmes-navegador.png?raw=true)
![Rota Insomnia](https://github.com/marcelohoficial/dsi0015-atividade-pratica-1/blob/master/public/filmes-insomnia.png?raw=true)

## 🛠️ Tecnologias

- Node.js
- Express.js

## 📝 Licença

Este projeto está sob a licença MIT.
