// npm
const DataArchive = require("../models/DataArchive");

module.exports = {
	async index(req, res) {
		const data = await DataArchive.findAll();

		return res.json(data);
	},

	async store(req, res) {
		const { name, path, id_user, data } = req.body;

		const dataArchive = await DataArchive.create({
			name,
			path,
			data,
			id_user,
		});

		return res.json(dataArchive);
	},
};
