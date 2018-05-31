'use strict';

const { Op } = require('sequelize')

const { Product } = require('./../sqldb');

/**
 * Count
 */

Product.count({
  where: {
    price: { [Op.gt]: 260 }
  }
})
  .then(total => {
    console.log('Quantity of products greater than 260: ', total)
  })
