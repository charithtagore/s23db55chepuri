const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
brand: String,
color: String,
price:{
    type:Number,
    min: 1,
    max: 7000 }
})
module.exports = mongoose.model("Costume",earphonesSchema)