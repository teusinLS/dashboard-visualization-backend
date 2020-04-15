// model
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth");

// get token
function generateToken(params = {}) {
	// creating token
	return jwt.sign(params, authConfig.secret, {
		expiresIn: 86400, // 1 day
	});
}

// export
module.exports = {
	async show(req, res) {
		const { email, password } = req.body;

		const user = await User.findOne({
			where: { email },
		});

		// comparing encrypted passwords
		if (user === null || !(await bcrypt.compareSync(password, user.password))) {
			return res
				.status(401)
				.send({ error: "Endereço de email ou senha inválidos." });
		}

		// removing password from object
		user.password = undefined;

		res.setHeader("Authentication", "Bearer " + "CU");

		return res.status(200).json({
			user,
			token: generateToken({ id: user.id }),
			message: "Bem vindo de volta, " + user.name,
		});
	},

	async store(req, res) {
		const { name, email, password } = req.body;

		const user = await User.create({
			name,
			email,
			password,
		});

		if (user === null) {
			return res.status(401).json({
				msg: "Erro ao criar usuário, tente novamente.",
			});
		}

		// removing password from object
		user.password = undefined;

		return res.status(200).json({
			user,
			token: generateToken({ id: user.id }),
			msg: "Seja bem vindo!",
		});
	},
};
