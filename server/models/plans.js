"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  plans.init(
    {
      plan1: DataTypes.STRING,
      plan2: DataTypes.STRING,
      plan3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "plans",
    }
  );
  return plans;
};
