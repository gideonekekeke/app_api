require('dotenv').config()
const express =  require('express')
const port = process.env.PORT || 5050
const mongoose = require('mongoose')
const cors = require('cors')

const url_online = process.env.URL

const app = express()

mongoose.connect(url_online).then(()=>{
    console.log('connected successfully...');
}).catch(()=>{
    console.log('error found');
})

app.use(express.json())

app.use(cors({ origin: "*" }));

app.use('/api', require('./Routes/Routes'))



app.listen(port, ()=>{
    console.log('listening on port');
})