var express = require('express');
require('dotenv').config()
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.post('/', (req, res, next) => {
  const Client = require('twitter.js').Client
  const bearerToken = process.env.BEARER_TOKEN ;
  const client = new Client();
  client.loginWithBearerToken(bearerToken);
  const username = req.body.username;
  client.users.fetchByUsername(username).then((user) => {
    if (user) {
      res.render('user', {user})
    } 
  })
})


module.exports = router;
