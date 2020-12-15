import { Module } from '@nestjs/common';
import { EmployeeService } from '../service/employee.service';
import { EmployeeController } from '../controller/employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {EmployeSchema} from '../model/employe.schema'


@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Employee', schema: EmployeSchema }])],
  controllers: [
    EmployeeController,
  ],
  providers: [EmployeeService],
})
export class EmployeeModule {}
