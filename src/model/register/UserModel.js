const mongoose = require("mongoose") //imported mongoose
const { isEmail } = require("validator")
const Schema = mongoose.Schema //initialised schema from mongoose

//set the user model
const registrationSchema = new Schema({
    name: {
        type: String,
        minlength: [4, "Name cannot be less than 4 characters"],
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Please enter an email address"],
        validate: [ isEmail, "Please enter a valid email address"]
    },
    password: {
        type: String,
        minlength: [4, "Password cannot be less than 4 characters"],
        required: [true, "Please enter your password"]
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

const User = mongoose.model("user", registrationSchema)
module.exports = User