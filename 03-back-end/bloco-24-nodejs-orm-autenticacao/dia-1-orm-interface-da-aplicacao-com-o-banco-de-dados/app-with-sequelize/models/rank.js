const Rank = (sequelize, DataTypes) => {
  const Rank = sequelize.define("Rank", {
    rank: DataTypes.INTEGER,
  });

  return Rank;
};

module.exports = Rank;