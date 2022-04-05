const express= require('express')
const methodOverride= require('method-override')
const mongoose = require('mongoose')

//configuration
require('dotenv').config()
const PORT= process.env.PORT
const app= express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    ()=> {console.log("connected to mongo")})

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())



//ROUTES
app.get("/", (req, res) => {
    res.send("Wecome to an awesome app about breads")
})


// breads
const breadsController = require('./controllers/bread_controllers.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

//Listen
app.listen(PORT, ()=> {
    console.log('nomming at port', PORT)
})

