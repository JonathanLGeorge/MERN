import monngoose, { Mongoose } from "mongoose";

const Schema = Mongoose.Schema;

export const MernSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  isDev: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
  },
  skill_level: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
