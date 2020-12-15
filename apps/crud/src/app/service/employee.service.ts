import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Employee} from '../model/employe.interface'
import { Observable, from } from 'rxjs';
import {map} from 'rxjs/operators'


@Injectable()
export class EmployeeService {
  constructor(@InjectModel('Employee') private readonly itemModel: Model<Employee>) {}
  getAlldataEmploye(): Observable<Employee[]> {
      return from(this.itemModel.find())
  }
  createEmployeData(employe: Employee): Observable<Employee | any> {
      return from(this.itemModel.create(employe)).pipe(
          map((employe: Employee) => {
              return ({
                  message: "berhasil insert",
                  data: employe,
              })
          })
      )
  }

  DeleteEmploye(id:number): Observable<Employee> {
      return from(this.itemModel.deleteOne({_id: id})).pipe(
          map((employe: Employee) => {
              return employe
          })
      )
  }
  updateEmploye(employee: Employee, id: number): Observable<Employee | any> {
      return from(this.itemModel.findByIdAndUpdate(id, employee, {new: true})).pipe(
          map((employe: Employee) => {
              return employe
          })
      )
  }

  GetById(id: number): Observable<Employee> {
      return from(this.itemModel.findOne({_id: id})).pipe(
          map((employe: Employee) => {
              return employe
          })
      )
  }

}
