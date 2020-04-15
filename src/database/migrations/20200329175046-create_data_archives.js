"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("data_archives", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},

			id_user: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Users", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},

			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},

			path: {
				type: Sequelize.STRING,
				allowNull: false,
			},

			data: {
				type: Sequelize.JSON,
				allowNull: false,
			},

			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},

			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("data_archives");
	},
};
