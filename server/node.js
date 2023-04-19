const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json({ extended : true }))
app.use(bodyParser.urlencoded({ extended : true }))

app.use('/', Route )

const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

