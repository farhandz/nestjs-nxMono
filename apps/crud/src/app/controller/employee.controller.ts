import { Controller, Get, Res, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { EmployeeService } from '../service/employee.service';
import { Observable, from, of } from 'rxjs';
import { Employee } from '../model/employe.interface';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly EmployeeService: EmployeeService) {}
    @Get()
    getData(): Observable<Employee[]> {
        return from(this.EmployeeService.getAlldataEmploye())
    }

    @Get(':id')
    getByid(@Param('id') id:number): Observable<Employee> {
        return from(this.EmployeeService.GetById(id))
    }

    @Post()
    CreateDataEmploye(@Body() employe: Employee): Observable<Employee | any> {
        return from(this.EmployeeService.createEmployeData(employe))
    }
    
    @Delete(':id')
    DeleteEmploye(@Param('id') id:number): Observable<Employee> {
        return from(this.EmployeeService.DeleteEmploye(id))
    }

    @Put(':id')
    EditEmploye( @Body() employe: Employee, @Param('id') id:number): Observable<Employee>{
        return from(this.EmployeeService.updateEmploye(employe, id))
    }
}
