const express = require('express'); //grab express
const app = express();              //create an instance of express
const nunjucks = require('nunjucks');
const tweets = require('./tweetbank')
const routes = require('./routes')


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }) //disable caching and point nunjucks to the proper directory for templates

app.use('/', routes); //routes is found in routes/index.js

// app.use(function(req,res,next){ //catches all requests to root '/' 
//     res.send(req.method.toString()+ " "+req.url.toString());
//     console.log(req.method ,req.url);       //and prints out the string in the URL
// ;})

app.listen(3005, () => console.log('server listening')); //tell our server to listen on 3003 and print out console.log


