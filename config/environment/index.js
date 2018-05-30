/**
 * Default specific configuration
 * @author: Cristian Moreno Zulauaga <khriztianmoreno@gmail.com>
 */

const _ = require('lodash')
const dotenv = require('dotenv')
dotenv.config()

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'

let envFile = require('./development.js')

if (env === 'production') {
  envFile = require('./production.js')
}

// All configurations will extend these options
// ============================================
const all = {
  env: process.env.NODE_ENV,

  // Server port
  port: process.env.PORT || 3000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'sequelize101-secret'
  },

   // List of user roles
   userRoles: ['guest', 'user', 'admin']
}

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, envFile || {})
