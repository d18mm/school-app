'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentSubjects = sequelize.define('StudentSubjects', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudentSubjects;
};