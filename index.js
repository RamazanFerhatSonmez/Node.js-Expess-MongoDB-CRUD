const express = require("express")
const path= require("path")
const handlebars = require("handlebars")
const exphbs = require("express-handlebars")
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')

var app = express()
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
require('./routes/webapi')(app);
app.get('/',(req, res) => {
    res.send(`
        <h2> Wel
    `)
})
app.listen(3000, () => {
    console.log('server startted at port 3000')
})