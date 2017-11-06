'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentSubjects = sequelize.define('StudentSubjects', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {

  });
  StudentSubjects.associate = function (models) {
    StudentSubjects.belongsTo(models.Subject);
    StudentSubjects.belongsTo(models.Students)
  };
  return StudentSubjects;
};
