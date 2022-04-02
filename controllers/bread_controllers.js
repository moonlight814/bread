const express = require('express')
const breads = express.Router()
const Bread= require ('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  Bread.find()
    .then(foundBreads => {
      console.log(foundBreads)
        res.render('Index',
        {
          breads: foundBreads,
          title: 'Index Page'
        })
        // res.send(Bread)
      })
    })

module.exports = breads

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})


// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
        const bakedBy= foundBread.getBakedBy()
        console.log(bakedBy)
          res.render('show', {
              bread: foundBread
          })
      })
      .catch(err =>{
        res.send('404')
      })
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedBread => {
    console.log(updatedBread)
  res.redirect(`/breads/${req.params.id}`)
  })
})

// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
  .then(deletedBread => {
  res.status(303).redirect('/breads')
  })
})

// CREATE
breads.post('/', (req, res) => {
  console.log
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})


// EDIT
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
  .then(foundBread => {
  res.render('edit', {
    bread: foundBread
    })
  })
})