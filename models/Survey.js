const mongoose = require('mongoose');
const recipientSchema= require('./Recipient')

const { Schema } = mongoose;

const surveySchema = new Schema({
  title:String,
  body:String,
  subject:String,
  recipients:[recipientSchema],
  yes: {type:Number, default:0},
  no: {type:Number, default:0},
  _user: {type: Schema.Types.ObjectId, ref:"user"},
  dataSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
