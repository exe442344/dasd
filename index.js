const express = require('express');
const app = express();
const hbs = require('express-handlebars')
const path = require('path')

// configuration 
app.set('port', process.env.PORT || 3000)

// Enginer
app.set('views', path.join(__dirname, '/view'))
app.set('view engine', '.hbs')
app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'main'
}))


//Middles


// Statics File
app.use(express.static('public'))
//routes
app.get('/', (req, res)=>{
    res.render('home.hbs', {
        title: 'Casita'
    })
})
app.get('/random', (req, res)=>{
    res.render('random.hbs', {
        title: 'QUE MIRAS PE'
    })
})

// listen
app.listen('3000',()=>{
    console.log('listening on port', app.get('port'));
})