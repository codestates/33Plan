'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class goods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.todays);
      this.belongsTo(models.countPerWeek);
    }
  }
  goods.init({
  },
    {
      sequelize,
      modelName: 'goods',
    });
  return goods;
};