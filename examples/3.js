'use strict';

const { User } = require('./../sqldb');

/**
 * Find All with limit
 */
User.findAll({
  limit: 5,
  // attributes: ['name', 'email']
  // attributes: { exclude: ['password', 'salt'] }
})
  .then(users => {
    users.forEach((element, index) => {
      console.log(index, element.toJSON())
    });
  })
