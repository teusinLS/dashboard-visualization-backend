// npm
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

// model
class User extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING,
				email: DataTypes.STRING,
				password: DataTypes.STRING,
			},
			{
				hooks: {
					beforeCreate: (user, options) => {
						user.password = bcrypt.hashSync(user.password, 10);
					},
				},
				sequelize: connection,
			},
		);
	}
}

// exports
module.exports = User;
