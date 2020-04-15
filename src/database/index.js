// npm
const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

// models
const User = require("../models/User");
const DataArchive = require("../models/DataArchive");

// const
const connection = new Sequelize(dbConfig);

User.init(connection);
DataArchive.init(connection);

DataArchive.associate(connection.models);

// export
module.exports = connection;
