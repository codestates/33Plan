'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trying extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  trying.init({
    id: DataTypes.INTEGER,
    today_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trying',
  });
  return trying;
};