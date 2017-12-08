'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
 return queryInterface.createTable(
 'bets',
 {
 player_id: {
 type: Sequelize.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },

 bet_id: {
 type: Sequelize.INTEGER,
 allowNull: false
 },

 amount: {
 type:Sequelize.INTEGER,
 allowNull: false
 }

 }
 );
},
down: (queryInterface, Sequelize) => {
return queryInterface.dropTable('bets');
}
};
