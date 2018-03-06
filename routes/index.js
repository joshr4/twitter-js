const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log('router.get file');
  console.log('tweets ',tweets);
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets', function (req, res) {
    console.log('stylesheet');
    //res.render( ('index', { tweets: tweets } );
    res.sendFile('/public/stylesheets/style.css')
  });


module.exports = router;