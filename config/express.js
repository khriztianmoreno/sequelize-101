/**
 * Express configuration
 * @author: Cristian Moreno Zulauaga <khriztianmoreno@gmail.com>
 */

const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const methodOverride = require('method-override')

module.exports = (app) => {
  app.use(compression())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(methodOverride())
  app.use(cors())
}
