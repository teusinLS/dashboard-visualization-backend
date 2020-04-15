// require
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("./database");

// consts
const app = express();
const port = process.env.PORT || 3333;

// use
app.use(cors());
app.use(express.json());
app.use(routes);

// server
app.listen(port, (err) => {
	if (err) return console.error("> Erro ao iniciar servidor: " + err);
	return console.log("> Servidor rodando na porta " + port);
});
