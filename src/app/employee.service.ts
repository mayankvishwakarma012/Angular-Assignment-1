import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs';
import { Employee , skillsAndExpriences} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService  {


  public editMode : Boolean = false;
  public employeeDetails : Employee[] = [];

  public editEmployeeDetails !: Employee;
  editAtIndex !: number ;
  employee !: Employee;



  editModeToggle(value : Boolean){
    this.editMode = value
  }



  addEmployee(employee: Employee) {

    //console.log(JSON.stringify(employee) );
    this.employeeDetails.push(employee);
    return true;
    //console.log('Employee added successfully! in service');
    //console.log(this.employeeDetails);

  }

  deleteEmployee(employeeId : number){
    this.employeeDetails.splice(employeeId,1);
  }

  editEmployeeGet(employee: Employee , index : number){
    this.editEmployeeDetails = employee;
    this.editAtIndex = index;
  }

  UpdatedEmployee(updatedEmployee : Employee){
    console.log(updatedEmployee);
    console.log(this.employeeDetails[this.editAtIndex]);
    this.employeeDetails[this.editAtIndex] = updatedEmployee;
    console.log('data updated successfully...')

  }

  }





