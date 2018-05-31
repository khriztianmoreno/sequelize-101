'use strict';

const { Product } = require('./../sqldb');

/**
 * Find Or Create
 */

const prod = {
  name: 'Super project',
  description: 'Lorem ipsum ...',
  price: 13,
  companyId: '712313bd-5f45-417e-b3f3-056056c1144b'
}

Product.findOrCreate({
  where: { name: 'Super project' },
  defaults: { // set the default properties if it doesn't exist
    name: 'Super project',
    description: 'Lorem ipsum ...',
    price: 13,
    companyId: '712313bd-5f45-417e-b3f3-056056c1144b'
  }
}).spread((productResult, created) => {
  if (!created) {
    productResult.update({
      name: 'Super Best project',
      description: 'Lorem ipsum ...',
      price: 13,
      companyId: '712313bd-5f45-417e-b3f3-056056c1144b'
    })
  }
})
