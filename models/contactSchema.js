const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const ContactSchema = new Schema({


firstName : String , 
lastName : String ,
email : {type:String ,/*required: true*/ }, 
address: {city : String, zipCode: Number,},
password:{type:String ,/* required: true */}, 
phone: Number ,
date : Date
}); 

const Contact = mongoose.model("contact",ContactSchema)
module.exports = Contact ;

