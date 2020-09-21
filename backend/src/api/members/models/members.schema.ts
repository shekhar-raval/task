import { Schema, Types } from "mongoose";


export const MemberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  parent: {
    type: Types.ObjectId,
    default: null,
  },
  tree: {
    type: Types.ObjectId,
    ref: 'family',
    required: true
  },
}, {
    timestamps: true
});