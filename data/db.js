const Author = require ("../models/Author")
const Book = require ("../models/Book")

const mongoDataMethod = {
    getAllBooks : async ()=>{
       return await Book.find()
    },
    getAllAuthor : async ()=>{
        return await Author.find()
    },
    createAuthor: async args =>{
        const newAuthor = new Author(args)
        return await newAuthor.save();
    },
    createBook: async args =>{
        const newBook = new Book(args)
        return await newBook.save();
    },
    searchBookById : async id =>{
        return await Book.findById(id)
    },
    searchAuthorById : async id =>{
        return await Author.findById(id)
    },
    searchBookByAuthor : async id =>{
        return await Book.find({"authorId":id})
    }

}
module.exports = mongoDataMethod;