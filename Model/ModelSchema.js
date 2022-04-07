const mongoose = require('mongoose')


const mySchema = mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    serialNumber : {
        type : Number,
        required : true
    },
})



module.exports = mongoose.model('users', mySchema)