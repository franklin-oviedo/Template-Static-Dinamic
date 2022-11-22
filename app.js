const express = require('express')
const app = express();
const hbs = require('hbs')
require('dotenv').config();
const portHost = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)
//Contenido Estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).render('home', {
        nombre: 'Franklin Oviedo',
        titulo: 'Cursor Node'
    });
})
app.get('/generic', (req, res)=>{
    res.status(200).render('generic/generic'); 
})

app.get('/elements', (req, res)=>{
    res.status(200).render('elements/element'); 
})

app.get('/*', (req, res)=>{
    res.status(200).render('404/404'); 
})

/*Referencia 
app.get('/generic', (req, res)=>{
    res.status(404).sendFile(`${__dirname}/public/generic.html`) 
})

app.get('/elements', (req, res)=>{
    res.status(404).sendFile(`${__dirname}/public/elements.html`) 
})

app.get('*', (req, res)=>{
    res.status(404).sendFile(`${__dirname}/public/404.html`) 
})*/

app.listen(portHost, ()=>{
    console.log(`App Listen: http://localhost:${portHost}/`)
})