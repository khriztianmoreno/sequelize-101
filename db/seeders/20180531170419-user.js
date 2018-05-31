'use strict';

const USERS = [
  {
    name: 'Hicks Kidd',
    role: 'user',
    password: '5b0f78cb5bf11b30a51931e1',
    salt: 'Rachael',
    provider: 'Waller',
    email: 'rachael.waller@waller.info'
  },
  {
    name: 'Cassie Wyatt',
    role: 'admin',
    password: '5b0f78cb4ee116caac2330e3',
    salt: 'Fay',
    provider: 'Manning',
    email: 'fay.manning@manning.net'
  },
  {
    name: 'Campos Barron',
    role: 'admin',
    password: '5b0f78cb83057777b5cc81bf',
    salt: 'Gibbs',
    provider: 'Robertson',
    email: 'gibbs.robertson@robertson.me'
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', USERS, {})
    .then(() => console.log('finished populating users'))
    .catch(err => console.log('error populating users', err))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
