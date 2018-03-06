const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  //console.log('router.get file');
  //console.log('tweets ',tweets);
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    console.log('list ',list);
    res.render( 'index', { list: list } );
  });

//EXTRA CREDIT 
//router.get('*', function (req, res) {
//     if(req.path) //if the URI maps to a file
//         res.sendFile('/Users/josh/Documents/FSA/twitter-js/public/' +req.path);
//     else return next();
//   });

router.use(express.static('public'));

module.exports = router;