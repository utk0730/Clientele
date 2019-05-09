const mongoose = require('mongoose')
const schema = mongoose.Schema


//create clients Schema & model
const clientsSchema = new schema({
    name:{
        type: String,
        required:[true,'name is required']
    },
    email : {
        type: String,
        required :[true,'email is required']
    },
    contact :{
        type: String,
        required :[true,'contact is required']
    },
    date :{
        type: Date
    }
    
})

const clientsModel = mongoose.model('clients',clientsSchema)
module.exports = clientsModel