const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
brand:  {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
color: String,
price:{
    type:Number,
    min: 1,
    max: 7000 }
})
module.exports = mongoose.model("Costume",earphonesSchema)