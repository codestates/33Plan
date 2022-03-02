'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class today extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  today.init({
    id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    plan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'today',
  });
  return today;
};