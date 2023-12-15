const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
app.use(express.json())

const baseApiUrl = `/api/v1`
const PORT = process.env.PORT || 3001

app.get('/hello', (req, res) => {
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`>>> server app is running on http://localhost:${PORT}}`) // Değişiklik yapıldı
})
