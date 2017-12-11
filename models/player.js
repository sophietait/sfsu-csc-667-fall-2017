'use strict';

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');

// create a sequelize instance with our local postgres database information.

var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js')[env];

if (config.use_env_variable) {
  console.log("DB select URL from env var");
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  console.log("DB select URL from config");
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

var Player = sequelize.define('player', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    player_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    balance: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      // status 0: player ready to place bets
      // status 1: player completed placing bets
      type: Sequelize.INTEGER,
      allowNull: false
    }
}, {
    hooks: {
      beforeCreate: (player) => {
        const salt = bcrypt.genSaltSync();
        player.password = bcrypt.hashSync(player.password, salt);
      }
    }
});

Player.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password,this.password)
}

sequelize.sync()
    .then(() => console.log('player table has been successfully initialized OR created'))
    .catch(error => console.log('This error occured ', error));

module.exports = Player;
