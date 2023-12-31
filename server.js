// DEPENDENCIES
const methodOverride = require('method-override')
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// Breads 
const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.render('404')
})


// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
