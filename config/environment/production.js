/**
 * Production specific configuration
 * @author: Cristian Moreno Zulauaga <khriztianmoreno@gmail.com>
 */

module.exports = {
  // Server IP
  ip: process.env.HEROKU_IP || process.env.IP || undefined,

  // Server port
  port: process.env.HEROKU_PORT || process.env.PORT || 3000,

  sequelize: {
    username: process.env.SEQUELIZE_USERNAME || 'username',
    password: process.env.SEQUELIZE_PASSWORD || 'password',
    database: process.env.SEQUELIZE_DATABASE || 'database',
    host: process.env.SEQUELIZE_HOST || 'host',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true
      }
    },
    dialect: 'postgres'
  }
}
