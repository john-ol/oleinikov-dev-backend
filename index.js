require('dotenv').config()
const express = require('express')
const cors = require('cors')

const route = require('./routes/routes')
const bot = require('./botSettings/settings')

const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', route)

bot.startPolling()

app.listen(port, () => {
  console.log(`Server has been started on port: ${port}`)
})
