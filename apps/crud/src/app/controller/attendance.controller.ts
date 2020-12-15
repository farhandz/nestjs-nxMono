import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { Attendance } from '../model/attendance.interface';
import { AttendanceService } from '../service/attendance.service';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly AttandanceService: AttendanceService) {}
  @Get()
  getDataAttandance(): Observable<Attendance[]> {
    return from(this.AttandanceService.GetData());
  }
  @Post()
  createAttandande(@Body() Attandance: Attendance): Observable<Attendance> {
     return from(this.AttandanceService.CreateData(Attandance))
  }
  @Delete(':id')
  DeleteAttandance(@Param('id')  id:number): Observable<Attendance> {
      return from(this.AttandanceService.DeleteData(id))
  }
  @Put(':id')
  UpdateAttanance(@Param('id') id, @Body() Attandandance: Attendance) : Observable<Attendance> {
      return from(this.AttandanceService.updateData(id, Attandandance))
  }
}
