'use strict';

const { Company } = require('./../sqldb');

Company.findAndCountAll()
  .then(({ count, rows }) => {
    console.log('Count: ', count)
    console.log('Rows: ', rows)

    /* const page = 1
    const limit = 3

    const pages = Math.ceil(count / limit)
    const offset = limit * (page - 1)

    Company.findAll({
      limit,
      offset,
      $sort: { id: 1 }
    })
    .then((products) => {
      products.forEach(product => {
        console.log(product.toJSON())
      });
    }) */
  })
