import {Document} from 'mongoose'

export interface Attendance extends Document {
    nama: string,
    izin: number,
    alpha: number,
    total: number    
}