module.exports = (sequelize, DataTypes) => {
  const Applications = sequelize.define("Applications", {
    application_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    application_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    application_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Applications.associate = (models) => {
    Applications.belongsTo(models.Users, {
      foreignKey: "userId",
      onDelete: "SET NULL",
    });
  };

  return Applications;
};
