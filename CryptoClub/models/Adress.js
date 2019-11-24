/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Adress', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    walletId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Wallet',
        key: 'id'
      }
    }
  }, {
    tableName: 'Adress',
    timestamps: false
  });
};
