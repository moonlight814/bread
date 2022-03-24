const express= require('express')

//configuration
require('dotenv').config()
const PORT= process.env.PORT
const app= express()


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


//ROUTES
app.get("/", (req, res) => {
    res.send("Wecome to an awesome app about breads")
})

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })

//BREADS
const breadsController= require('./controllers/bread_controllers.js')
app.use('/breads', breadsController)

//Listen
app.listen(PORT, ()=> {
    console.log('nomming at port', PORT)
})