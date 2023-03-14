import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //employee !: Employee;
  //employeeDetails : Employee[] = [employee];

  employee = new Employee('Employee Id','Employee Name','Email','Contact','Gender',[{ skill:'Skill', exprience:'exprience'}]);
  private employeeDetails : Employee[] = [{id:'Employee Id',name:'Employee Name',email:'Email',contact:'Contact',gender:'Gender',skillsAndExpriences:[{ skill:'Skill', exprience:'exprience' }]}];
  //employeeDetails.push(this.employee);


  getEmployee(){
    console.log(this.employeeDetails);
    return this.employeeDetails;

  }


  addEmployee(employee: object) {
    this.employeeDetails.push(employee);
    console.log('Employee added successfully! s');
    console.log(employee);

  }

  }
