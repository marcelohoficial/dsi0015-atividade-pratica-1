const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.json("Olá, bem-vindo à minha API!");
});

router.get("/filmes", (_, res) => {
  const filmes = [
    { id: 1, name: "Auto da Compadecida", description: "Filme de comédia" },
    { id: 2, name: "Vingadores", description: "Filme de ação" },
    { id: 3, name: "O Poderoso Chefão", description: "Filme de drama" },
  ];

  res.json(filmes);
});

module.exports = router;
