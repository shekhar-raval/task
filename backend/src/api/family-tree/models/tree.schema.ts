import { Schema } from "mongoose";

export const TreeSchema = new Schema({
  familyName: {
    type: String,
    required: true
  }
});