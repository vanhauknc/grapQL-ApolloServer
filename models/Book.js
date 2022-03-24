const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name:{
        type:String
    },
    genere:{
        type:String
    },
    authorId :{
        type:String
    }
})
module.exports = mongoose.model('books',BookSchema)