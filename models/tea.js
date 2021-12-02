const mongoose = require("mongoose") 
const teaSchema = mongoose.Schema({ 
 tea_type: String, 
 size: {
     type: String,
     minLength: 5
 }, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Tea",teaSchema) 
