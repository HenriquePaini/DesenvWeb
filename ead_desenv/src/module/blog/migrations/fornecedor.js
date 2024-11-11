'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const table = {tableName: "fornecedor", schema: "public"};
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cnpj:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cep:{
        allowNull: false,
        type: sequelize.INTEGER,
      },
      estado:{
        allowNull: false,
        type: sequelize.STRING,
      },
      cidade:{
        allowNull: false,
        type: sequelize.STRING,
      },
      endereco:{
        allowNull: false,
        type: sequelize.STRING,
      },
      telefone:{
        allowNull: false,
        type: sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    const table = {tableName: "fornecedor", schema: "public"};
    await queryInterface.dropTable(table);
  }
};