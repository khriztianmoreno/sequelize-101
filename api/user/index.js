'use strict'

const { Router } = require('express')

const User = require('./user.controller')

const router = new Router()

router.get('/', User.index)
router.post('/', User.create)
router.get('/:id', User.show)
router.delete('/:id', User.destroy)

module.exports = router
