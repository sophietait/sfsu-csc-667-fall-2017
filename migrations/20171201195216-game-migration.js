'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
 return queryInterface.createTable(
 'game',
 {
 player_id: {
 type: Sequelize.INTEGER,
 autoIncrement: true
 },

 game_id: {
 type: Sequelize.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },

 minbet: {
 type: Sequelize.INTEGER,
 allowNull: false
 },

 maxbet: {
 type:Sequelize.INTEGER,
 allowNull: false
 },

 inside_bet: {
 type: Sequelize.INTEGER,
 allowNull: false
 },

 outside_bet: {
 type:Sequelize.INTEGER,
 allowNull: false
 },

 winning_number: {
 type:Sequelize.INTEGER,
 allowNull: false
 },

 game_bets: {
 type:Sequelize.INTEGER,
 }

 }
 );
},
down: (queryInterface, Sequelize) => {
return queryInterface.dropTable('game');
}
};
