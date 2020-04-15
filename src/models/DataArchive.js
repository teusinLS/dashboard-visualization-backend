// npm
const { Model, DataTypes } = require("sequelize");

// model
class DataArchive extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING,
				path: DataTypes.STRING,
				data: DataTypes.JSON,
			},
			{
				sequelize: connection,
			},
		);
	}

	static associate(models) {
		this.belongsTo(models.User, { foreignKey: "id_user", as: "owner" });
	}
}

// exports
module.exports = DataArchive;
