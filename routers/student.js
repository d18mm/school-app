const express = require('express')
const routers = express.Router()
const modelstuden = require('../models/')

routers.get('/student', (req, res) => {
  modelstuden.Students.findAll()
    .then(studen => {
      res.render('student', {
        data: studen
      })
    })
})


routers.get('/student/add', (req, res) => {
  res.render('addstudent')
})

routers.post('/student/add', (req, res) => {
  modelstuden.Students.build({
      first_Name: `${req.body.first_Name}`,
      last_Name: `${req.body.last_Name}`,
      email: `${req.body.email}`,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .save()
    .then(studen => {
      res.redirect('/student')
    })
})

routers.get('/studen/edit/:id', (req, res) => {
  modelstuden.Students.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(studen => {
      res.render('editstudent', {
        data: studen
      })
    })
    .catch(err => {
      console.log(err);
    })
})

routers.post('/studen/edit/:id', (req, res) => {
  modelstuden.Students.update({
      first_Name: `${req.body.first_Name}`,
      last_Name: `${req.body.last_Name}`,
      email: `${req.body.email}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      where: {
        id: `${req.params.id}`
      }
    })
    .then(studen => {
      res.redirect('/student')
    })
    .catch(err => {
      console.log(err);
    })
})

routers.get('/student/addsubject/:id',(req,res)=>{
  modelstuden.Students.findById(req.params.id)
  .then(student=>{
    modelstuden.Subject.findAll()
    .then(subjek=>{
      res.render(`addsubjectstudent`,{datasub:subjek,data:student})
    })
  })
})

module.exports = routers
