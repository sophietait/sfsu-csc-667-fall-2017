'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
 return queryInterface.createTable(
 'chat',
 {
 player_id: {
 type: Sequelize.INTEGER,
 autoIncrement: true
 },

 message: {
 type:Sequelize.STRING,
 }

 }
 );
},
down: (queryInterface, Sequelize) => {
return queryInterface.dropTable('chat');
}
};
