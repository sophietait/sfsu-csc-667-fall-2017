'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
 return queryInterface.createTable(
 'player',
 {
 player_id: {
 type: Sequelize.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },

 username: {
 type: Sequelize.STRING,
 allowNull: false
 },

 email_id: {
 type:Sequelize.STRING,
 allowNull: false
 },

 password: {
 type:Sequelize.STRING,
 allowNull: false
 },

 balance: {
 type:Sequelize.INTEGER,
 },

 state: {
 type:Sequelize.STRING,
 allowNull: false
 },

 coin_id: {
 type:Sequelize.INTEGER,
 },

 bets_id: {
 type:Sequelize.INTEGER,
 }

 }
 );
},
down: (queryInterface, Sequelize) => {
return queryInterface.dropTable('player');
}
};
