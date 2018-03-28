var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/coucou', function (req, res, next) {
  res.render('coucou', {sayHello: 'hello buddy'})
})

module.exports = router
