'use strict';

const { Product } = require('./../sqldb');

/**
 * Sum
 */

Product.sum('price')
  .then(total => {
    console.log('Total: ', total)
  })
