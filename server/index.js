const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const Router = require('./router')

const app = express()

const PORT = process.env.PORT || 80

const dbConnect = () => {
    try {
        mongoose.connect(`${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_URL}`, {useNewUrlParser: true})
    } catch (error) {
        console.log(error)    
    }
}

app.use(bodyParser.json())
app.use(cors())
app.use('/api', Router)

app.use(express.static('./client/build'))

dbConnect()

try {
    app.listen(PORT,  () => {
        console.log(`Listening on port: ${PORT}`)
    })
} catch (error) {
    console.log(error)
}
