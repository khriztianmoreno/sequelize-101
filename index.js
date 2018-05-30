'use strict'

const express = require('express')
const http = require('http')
const winston = require('winston')

const config = require('./config/environment')
const sqldb = require('./sqldb')
const expressConfig = require('./config/express')
const routeConfig = require('./routes')

// Setup server
const app = express()
const server = http.createServer(app)

expressConfig(app)
routeConfig(app)


// Start server
function startServer () {
  server.listen(config.port, config.ip, () => {
    winston.info(`Express server listening on ${config.port}, in ${app.get('env')} mode`)
  })
}

sqldb.sequelize.sync()
  .then(startServer)
  .catch((err) => {
    winston.error(`Server failed to start due to error: %{err}`)
  });

// Expose app
module.exports = app
