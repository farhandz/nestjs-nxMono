import * as mongoose from 'mongoose';

export const attendanceSchema = new mongoose.Schema({
    id: String,
    nama: String,
    izin: Number,
    alpha: Number,
    total: Number,
})

