module.exports = (sequelize, DataTypes) => {
  const Applications = sequelize.define("Applications", {
    applicantName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    applicantEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateApplied: {
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
