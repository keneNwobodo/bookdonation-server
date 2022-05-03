const mongoose = require("mongoose")
const { isEmail } = require("validator")
const Schema = mongoose.Schema

const booksSchema = new Schema({
    name: {
        type: String,
        minlength: [4, "Name cannot be less than 4 characters"],
        required: [true, "Please enter your name"]
    },
    phone: {
        type: String,
        required: [true, "Please enter your phone number"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Please enter an email address"],
        validate: [isEmail, "Please enter a valid email address"]
    },
    nameOfBook: {
        type: String,
        minlength: [4, "Mame of bool cannot be 0"],
        required: [true, "Please enter the name of the book"]
    },
    numberOfPages: {
        type: Number,
        required: [true, "Please enter the name of number of pages"]
    },
    address: {
        type: String,
        lowercase: true,
        minlength: [4, "Address cannot be less than 4 characters"],
        required: [true, "Please enter an ddress"]
    },
    state: {
        type: String,
        lowercase: true,
        minlength: [4, "Address cannot be less than 4 characters"],
        required: [true, "Please enter your state"]
    }
}, { timestamps: true })

const Books = mongoose.model("book", booksSchema)
module.exports = Books