const express = require('express')
var cors = require('cors')

const connectToMongo=require('./db')
connectToMongo()



const app = express()
const port = 5000
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/note',require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`myNotebook backend app listening on port ${port}`)
})
