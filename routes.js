/**
 * Express configuration
 */

const compression = require('compression')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const winston = require('winston')

const config = require('./config/environment')

// import Endpoints
const user = require('./api/user')
const company = require('./api/company')
const product = require('./api/product')


module.exports = (app) => {
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use('/api/user', user)
  app.use('/api/company', company)
  app.use('/api/product', product)

  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hi I am @Khriztianmoreno!' })
  })
}
