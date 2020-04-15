// npm
const express = require("express");
const routes = express.Router();

const authMiddleware = require("./middlewares/auth");

// controllers
const User = require("./controllers/UserController");
const DataArchive = require("./controllers/DataArchiveController");

// use
// routes.use(authMiddleware);

// routes
routes.post("/login", User.show);
routes.post("/register", User.store);

routes.get("/dashboard", DataArchive.index);
routes.post("/dashboard/add", DataArchive.store);

module.exports = routes;
