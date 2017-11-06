'use strict';
module.exports = (sequelize, DataTypes) => {
  var Students = sequelize.define('Students', {
    first_Name: DataTypes.STRING,
    last_Name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Students.belongsToMany(models.Subject,{through:'StudentSubjects'})
        Students.hasMany(models.StudentSubjects)
      }
    }
  });
  return Students;
};
