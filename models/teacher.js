'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_Name: DataTypes.STRING,
    last_Name: DataTypes.STRING,
    email: DataTypes.STRING,
    SubjectId: DataTypes.INTEGER
  });
  Teacher.associate = function (models) {
  Teacher.belongsTo(models.Subject,{foreignKey:'SubjectId'})
}
  return Teacher;
};
