const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const data = require('./models/data')

const app = express()
const PORT = process.env.PORT || 8000;

app.use(expressLayouts)
app.use('/',require('./routes/home'))
app.use('/goodbye', require('./routes/goodbye'))
app.set('view engine','ejs')

// Middleware
// 404 page - place at end of routing 
app.use((req,res)=>{
  res.status(404).sendFile('./views/404.html', {root: __dirname})
})

app.listen(PORT,()=> {
  console.log('Listening on port 8000')
})
