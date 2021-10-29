import mongoose from 'mongoose'
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const flightSchema = new Schema({
  airLine: String,
  airPort: string,
  flightNo: Number,
  departs: Date,
  nowShowing: Boolean
})