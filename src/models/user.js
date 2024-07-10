'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    day:{
      type: DataTypes.INTEGER,
      allowNull:false,
      unique:true
    },
    completed:{
      type:DataTypes.ENUM,
      allowNull:false,
      values:['YES','NO'],
      defaultValue:'NO'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};