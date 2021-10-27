const databaseConfig = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(databaseConfig);
const Estado = require("./Estado");
const Pet = require("./Pet");

const Endereco = sequelize.define(
  "Endereco",
  {
    cep: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    lagradouro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Estado",
        key: "id_estado",
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    },
  },
  {
    tableName: "Endereco",
    timestamps: false,
  }
);

Endereco.hasOne(Estado, {
  foreignKey: "id_estado",
  sourceKey: "id_estado",
  onDelete: "RESTRICT",
  onUpdate: "RESTRICT",
  as: "estado",
});

module.exports = Endereco;
