'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamUsers = sequelize.define('TeamUsers', {
    teamName: DataTypes.STRING,
    teamMembers: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeamUsers;
};