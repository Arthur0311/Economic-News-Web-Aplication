require('dotenv').config()
const { default: axios } = require('axios')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(cors())
app.use(express.json())

const apiKey = process.env.API_KEY
const port = process.env.PORT

app.get('/googlenewsapi', async(req, res)=>{

    try {
        const {data} = await axios(`https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=${apiKey}`)

        return res.json(data)
        
    } catch (error) {
        console.error(error)
        
    }
})

app.listen(port)
 

