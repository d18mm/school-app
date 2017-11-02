const express = require('express')
const routers = express.Router()
let model_teacher = require('../models/')

routers.get('/teacher',(req,res)=>{
  model_teacher.Teacher.findAll()
  .then(subjects=>{
    res.render('teacher',{data:subjects, title:''})
    console.log(subjects);
  })
  .catch(err =>{
    res.send(err)
  })
})

module.exports= routers
