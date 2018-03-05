const express = require('express');
const app = express();


app.get('/', function(req,res,next){
    res.send('Hello world');
})

app.get('/news', function(req,res,next){
    res.send('news!');
})

app.use(function(req,res,next){
    console.log(req.url)
;})

app.listen(3004, () => console.log('server listening'));