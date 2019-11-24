/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pw: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    balance: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    expert: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'User',
    timestamps: false
  });
};
