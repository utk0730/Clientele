const express= require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./routes/clients.apis')
const cors = require('cors')
const path = require('path')

const app = express()

//connect to mongoDB
mongoose.connect('mongodb://localhost/clientsdb',{useNewUrlParser : true})
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)


//middlware - for static assests
app.use(express.static(path.resolve(__dirname,'build')))

//middleware - body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

// middleware - initialize routes
app.use('/api',route)

//midlleware for handling error in routes
app.use((err,req,res,next)=>{
console.log(err.message)
res.status(422).send({error : err.message})
})


app.listen(4000,()=>{
    console.log('server is running on port : 4000',)
})
