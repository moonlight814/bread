const express= require('express')

//configuration
require('dotenv').config()
const PORT= process.env.PORT
const app= express()

//ROUTES
app.get("/", (req, res) => {
    res.send("Wecome to an awesome app about breads")
})

//BREADS
const breadsController= require('./controllers/bread_controllers.js')
app.use('/breads', breadsController)
//Listen
app.listen(PORT, ()=> {
    console.log('nomming at port', PORT)
})