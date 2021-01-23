/* eslint-disable camelcase */
module.exports = function(sequelize, DataType) {
  const User = sequelize.define("User", {
    email: {
      type: DataType.STRING(70),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataType.STRING(80),
      allowNull: false
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Song);
  };
  return User;
};
