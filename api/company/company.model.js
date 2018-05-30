'use strict'

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
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
  })

  // SEQUELIZE CLI
  /* Company.associate = (models) => {
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
  }; */

  return Company
}
