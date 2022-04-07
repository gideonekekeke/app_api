const mongoose = require('mongoose')


const mySchema = mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : String,
        required : true
    },
    serialNumber : {
        type : String,
        required : true
    },
})



module.exports = mongoose.model('users', mySchema)