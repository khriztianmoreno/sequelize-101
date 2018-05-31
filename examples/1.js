'use strict';

const { User } = require('./../sqldb');

/**
 * Find
 */
User.find()
  .then(user => { console.log(user) })
