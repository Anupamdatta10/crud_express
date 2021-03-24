const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/', routes);


app.listen(3000,()=>{console.log('http://localhost:3000')})