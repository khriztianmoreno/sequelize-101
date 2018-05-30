/**
 * Sequelize initialization module
 */

'use strict';

const Sequelize = require('sequelize');

const config = require('./../config/environment');

const db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize)
}

// Insert models below
db.Company= db.sequelize.import('./../api/company/company.model');
db.Product= db.sequelize.import('./../api/product/product.model');
db.User = db.sequelize.import('./../api/user/user.model');

//Relations
db.Company.belongsTo(db.User, {
  foreignKey: {
    name: 'userId',
    allowNull:false
  },
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

db.Product.belongsTo(db.Company, {
  foreignKey: {
    name: 'companyId',
    allowNull:false
  },
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
db.Company.hasMany(db.Product, { foreignKey: 'companyId', targetKey: 'id' });

module.exports = db;
