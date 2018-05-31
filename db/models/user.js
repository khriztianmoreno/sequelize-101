'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.STRING,
      defaultValue: 'user'
    },
    provider: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
