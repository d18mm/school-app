const express = require('express')
const routers = express.Router()
const modelsubjek = require('../models/')

routers.get('/subject', (req, res) => {
  modelsubjek.Subject.findAll(
    {include : [{
      model: modelsubjek.Teacher
    }]}
  )
    .then(subjects => {
      res.render('subject', {
        data: subjects,
        title: 'subject page'
      })
      // res.send(subjects)
    })
    .catch(err => {
      res.send(err)
    })
})

routers.get('/subject/add', (req, res) => {
  res.render('addsubjek')
})
routers.post('/subject/add', (req, res) => {
  modelsubjek.Subject.build({
      subject_name: `${req.body.subject_name}`,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .save()
    .then(subjek => {
      res.redirect('/subject')
    })
})

routers.get('/subject/delete/:id', (req, res) => {
  modelsubjek.Subject.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(subjects => {
      res.redirect('/subject')
    })
    .catch(err => {
      res.send(err)
    })
})


module.exports = routers
