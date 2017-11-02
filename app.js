const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//const Stundet = require('./routers/student')

const Teacher = require('./routers/teacher')
const Subject = require('./routers/subject')
app.get('/', (req, res) => {
  res.render('index')
})

app.use('/',Subject)
app.use('/',Teacher)


//app.use('/student',Stundet)



app.listen(3183,function(){
  console.log('star localhost 3183')
})
