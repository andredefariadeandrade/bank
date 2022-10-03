const HomeModel = require("../models/HomeModel");

HomeModel.create(
  {
    titulo: "to com fome",
    descricao: "de comida",
  },
  {
    titulo: "papai linduuu",
    descricao: "rafa feio",
  },
  {
    titulo: "amorinha linda",
    descricao: "poio lindo",
  }
)
  .then((dados) => console.log(dados))
  .catch((err) => console.error(err));

exports.paginaInicial = (req, res) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
