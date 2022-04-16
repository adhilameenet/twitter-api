var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.post('/', (req, res, next) => {
  const Client = require('twitter.js').Client
  const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAC8XbgEAAAAAKFiNVb6448sP7fgLKcbOCdFc%2FNU%3DnQcsjKmMjPxw6iapfVTMNC0yfYQRyD4XodjSCRvRRFIMdVXfpd';
  const client = new Client();
  client.loginWithBearerToken(bearerToken);
  
  const username = req.body.username;
  
  client.users.fetchByUsername(username).then((user) => {
    if (user) {
      res.render('user.hbs', { user })
    } 
  });
})


module.exports = router;
