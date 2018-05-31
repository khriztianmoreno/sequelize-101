'use strict';

const { Product } = require('./../sqldb');

/**
 * Max - Min
 */

Product.max('price')
  .then(max => {
    console.log('Max: ', max)
  })

Product.min('price')
  .then(min => {
    console.log('Min: ', min)
  })
