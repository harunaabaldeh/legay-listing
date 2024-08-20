module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Applications, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };

  Users.associate = (models) => {
    Users.hasMany(models.Jobs, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };

  return Users;
};
