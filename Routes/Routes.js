const express = require('express')
const router = express.Router()
const users = require('../Model/ModelSchema')

router.get('/gadgets', async(req, res)=>{
    try{

        const getRequest = await users.find()

        res.status(200).json({
            message : 'Successfull',
            data : getRequest
        })

    }catch(err){
        res.json('an error occured')
    }
})

router.post('/gadget', async(req, res)=>{
    try{

        const PostData = await users.create({
            fullname : req.body.fullname,
            phoneNumber : req.body.phoneNumber,
            serialNumber : req.body.serialNumber,
        })

        res.status(200).json({
            message : 'Successfull',
            data : PostData
        })

    }catch(err){
        res.json('an error occured')
    }
})


module.exports = router