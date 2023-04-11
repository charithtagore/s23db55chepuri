const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
brand: String,
color: String,
price: Number
})
module.exports = mongoose.model("Costume",earphonesSchema)