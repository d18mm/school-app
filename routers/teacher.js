const express = require('express')
const routers = express.Router()
let model_teacher = require('../models/')

routers.get('/teacher', (req, res) => {
  model_teacher.Teacher.findAll({
    include: [
    { model: model_teacher.Subject }
  ]
  })
    .then(teacher => {
      res.render('teacher', {
        data: teacher
      })
      // res.send(teacher)
    })
    .catch(err => {
      res.send(err)
    })
})

routers.get('/teacher/add', (req, res) => {
  res.render('addteacher')
})

routers.post('/teacher/add', (req, res) => {
  model_teacher.Teacher.build({
      first_Name: `${req.body.first_Name}`,
      last_Name: `${req.body.last_Name}`,
      email: `${req.body.email}`
    })
    .save()
    .then(teacher => {
      res.redirect('/teacher')
    })
})
routers.get('/teacher/delete/:id', (req, res) => {
  model_teacher.Teacher.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(teachers => {
      res.redirect('/teacher')
    })
    .catch(err => {
      res.send(err)
    })
})
routers.get('/teacher/edit/:id',(req,res)=>{
  model_teacher.Teacher.findAll({
    where: {
      id:req.params.id
    }
  })
  .then(teachers =>{
    // res.render('editTeacher',{
    //   data: teachers
    // })
    model_teacher.Subject.findAll()
    .then(subjek=>{
      res.render('editTeacher',{data:teachers,datasub:subjek})
      // res.send(teachers)
    })
  })
  .catch(err =>{
    console.log(err);
  })
})

routers.post('/teacher/edit/:id',(req,res)=>{
  model_teacher.Teacher.update({
    first_Name: `${req.body.first_Name}`,
    last_Name: `${req.body.last_Name}`,
    email: `${req.body.email}`,
    SubjectId : `${req.body.SubjectId}`
  },{
    where:{
      id:`${req.params.id}`
    }
  })
  .then(teachers=>{
    res.redirect('/teacher')
  })
  .catch(err =>{
    console.log(err);
  })
})

module.exports = routers
