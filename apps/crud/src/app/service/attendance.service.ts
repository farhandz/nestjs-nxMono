import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Attendance } from '../model/attendance.interface';
import { Observable, from } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel('Attandance')
    private readonly attendanceModel: Model<Attendance>
  ) {}
  GetData(): Observable<Attendance[]> {
      return from(this.attendanceModel.find())
  }
  
  CreateData(Attandance : Attendance): Observable<Attendance> {
      return from(this.attendanceModel.create(Attandance)).pipe(
          map((Attandance: Attendance) => {
              return Attandance
          })
      )
  }

  DeleteData(id: number): Observable<Attendance> {
      return from(this.attendanceModel.deleteOne({_id: id})).pipe(
          map((attamdace: Attendance) => {
              return attamdace
          })
      )
  }

  updateData(id: number, Attandance: Attendance): Observable<Attendance> {
      return from(this.attendanceModel.findByIdAndUpdate(id, Attandance, {new: true})).pipe(
          map((Attandance: Attendance) => {
              return Attandance
          })
      )
  }
}
