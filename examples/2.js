'use strict';

const { User } = require('./../sqldb');

/**
 * Find, SHow value
 */
User.find()
  .then(user => { console.log(user.toJSON()) })
