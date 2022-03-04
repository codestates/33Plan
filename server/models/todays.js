'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todays extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.users);
      this.belongsTo(models.goods);
      this.belongsTo(models.tryings);
      this.belongsTo(models.bads);
      // define association here
    }
  }
  todays.init({
    plan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'todays',
  });
  return todays;
};