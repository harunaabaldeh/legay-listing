module.exports = (sequelize, DataTypes) => {
  const Jobs = sequelize.define("Jobs", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posted_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Jobs.associate = (models) => {
    Jobs.hasMany(models.Applications, {
      foreignKey: "jobId",
      onDelete: "cascade",
    });
  };

  Jobs.associate = (models) => {
    Jobs.belongsTo(models.Users, {
      foreignKey: "userId",
      onDelete: "SET NULL",
    });
  };

  return Jobs;
};
