import * as mongoose from 'mongoose';

export const EmployeSchema = new mongoose.Schema({
  nama: String,
  umur: Number,
  gender: String,
  email: String,
  jobtitle: String
});
