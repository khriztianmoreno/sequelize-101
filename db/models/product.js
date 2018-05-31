'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Product.associate = (models) => {
    Product.belongsTo(models.Company, {
      foreignKey: {
        name: 'companyId',
        allowNull:false
      },
      targetKey: 'id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };
  return Product;
};
