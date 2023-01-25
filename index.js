//Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')
//const path = require('path')

//Express Settings
app.set('views', __dirname+'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
//app.use(express.static(path.join(__dirname+'/views')))


//Controllers and Router
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('*', (req, res)=>{
    res.status(404) .render('error404')
});

//Listen for connections
app.listen(process.env.PORT);