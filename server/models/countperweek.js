'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countPerWeek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  countPerWeek.init({
    id: DataTypes.INTEGER,
    good_id: DataTypes.INTEGER,
    trying_id: DataTypes.INTEGER,
    bad_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'countPerWeek',
  });
  return countPerWeek;
};