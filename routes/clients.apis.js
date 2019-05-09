const express = require('express')
const clientsModel = require('../models/clients.model')
const route = express.Router()

//GET method - get all blogs
route.get('/clients',(req,res,next)=>{
    console.log(req.url)
    console.log('get data from /clients')
    clientsModel.find({}).then((clients)=>{
        res.send({clients})
    }).catch(next)

    
})

//POST method - create a new client 
route.post('/clients',(req,res,next)=>{
    console.log('post method on  /clients')
    req.body.date= new Date
    clientsModel.create(req.body).then((client)=>{
        res.send(client)
    })
    .catch(next)
    
})

//PUT method - update a blog post
route.put('/clients/:id',(req,res,next)=>{
    console.log('put method on /clients/:id')
    console.log('****************************')
    res.send(req.body)
    clientsModel.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        clientsModel.findOne({_id:req.params.id}).then((data)=>{
            res.send({updatedData : data})
        })
    }).catch(next)
    
})


//DELETE method - delete a blog post
route.delete('/clients/:id',(req,res,next)=>{
    console.log('delete method on /clients/:id')
    console.log(req.body)
    clientsModel.findByIdAndDelete({_id:req.params.id}).then((data)=>{
        res.send({deletedData : data})
    }).catch(next)
    
})
module.exports = route