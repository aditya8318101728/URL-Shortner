//  Url Model
const mongoose = require ('mongoose')

const urlSchema = new mongoose.Schema({


    urlCode : {
        type : String,
        required: true,
        unique: true,
        lowercase:true,
        trim:true
    },

    longUrl : {
        type: String,
        required: true,
        trim: true
    },

    shortUrl: {
        type: String,
        required: true
    },

}, { timestamps: true});
    
module.exports = mongoose.model('url', urlSchema)