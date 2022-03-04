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
      this.hasMany(models.goods);
      this.hasMany(models.tryings);
      this.hasMany(models.bads);
    }
  }
  countPerWeek.init({
  },
    {
      sequelize,
      modelName: 'countPerWeek',
    });
  return countPerWeek;
};