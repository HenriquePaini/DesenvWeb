'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const table = {tableName: "produtos", schema: "public"};
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_fornecedor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        
        references: {
          model: {
            schema: "public",
            tableName: "fornecedor",
          },
          key: "id",
        }
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      preco: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      quantidades: {
        allowNull: false,
        type: Sequelize.STRING,
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
    const table = {tableName: "produtos", schema: "public"};
    await queryInterface.dropTable(table);
  }
};