'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
 return queryInterface.createTable(
 'pocket',
 {
 player_id: {
 type: Sequelize.INTEGER,
 autoIncrement: true
 },

 pocket_id: {
 type: Sequelize.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },

 number: {
 type: Sequelize.INTEGER,
 allowNull: false
 },

 colour: {
 type:Sequelize.STRING,
 allowNull: false
 },

 type: {
 type: Sequelize.STRING,
 allowNull: false
 }

 }
 );
},
down: (queryInterface, Sequelize) => {
return queryInterface.dropTable('pocket');
}
};
