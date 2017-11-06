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

routers.get('/student/delete/:id',(req,res)=>{
  modelstuden.Students.destroy({
    where:{
      id: req.params.id
    }
  })
  .then(studen=>{
    res.redirect('/student')
  })
  .catch(err=>{
    res.send(err)
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

routers.post('/student/addsubject/:id',(req,res)=>{
  // console.log('---->',req.body);
  modelstuden.StudentSubjects.create({
    StudentId : req.params.id,
    SubjectId : req.body.SubjectId
  })
  .then(()=>{
    res.redirect('/student')
    // res.send(data)
  })
})

module.exports = routers
