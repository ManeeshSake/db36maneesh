const mongoose = require("mongoose") 
const teaSchema = mongoose.Schema({ 
 tea_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Tea",teaSchema) 
