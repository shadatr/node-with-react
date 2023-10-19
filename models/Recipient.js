const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email:String,
  responded: {type:Boolean, default:false},
  response:Boolean
});
module.exports=recipientSchema;