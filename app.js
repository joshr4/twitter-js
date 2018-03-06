const express = require('express'); //grab express
const app = express();              //create an instance of express
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }) //disable caching and point nunjucks to the proper directory for templates




app.get('/test', function(req,res,next){
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.get('/', function(req,res,next){
    res.send('Hello world');
})

app.get('/news', function(req,res,next){
    res.send('news!');
})

app.use(function(req,res,next){ //catches all requests to root '/' 
    res.send(req.method.toString()+ " "+req.url.toString());
    console.log(req.method ,req.url);       //and prints out the string in the URL
;})

app.listen(3003, () => console.log('server listening')); ///tell our server to listen on 3003 and print out console.log





/*
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});
*/

