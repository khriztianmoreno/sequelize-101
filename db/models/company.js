'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    founded: DataTypes.INTEGER,
    address: {
      type: DataTypes.STRING
    }
  }, {});

  Company.associate = (models) => {
    Company.belongsTo(models.User, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      foreignKey: {
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      }
    });

    Company.hasMany(models.Product, {
      foreignKey: 'companyId',
      targetKey: 'id'
    });
  };

  return Company;
};
