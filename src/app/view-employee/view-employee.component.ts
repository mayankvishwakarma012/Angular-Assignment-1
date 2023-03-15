import { EmployeeService } from './../employee.service';
import { Employee, skillsAndExpriences } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  constructor(public employeeService : EmployeeService){}
  ngOnInit(): void {

    // this.employee = {id: 1, name: 'name',email: 'email',contact: 1234567890,gender: 'male',skillsAndExpriences: [{skill:'skill',exprience:'fresher'},{skill:'skill',exprience:'1 year'}]};
    // this.employeeService.addEmployee(this.employee);
    // this.employee = {id: 2, name: 'name',email: 'email',contact: 1234567890,gender: 'female',skillsAndExpriences: [{skill:'skill',exprience:'fresher'},{skill:'skill',exprience:'1 year'}]};
    // this.employeeService.addEmployee(this.employee);
    // this.employee = {id: 3, name: 'name',email: 'email',contact: 1234567890,gender: 'male',skillsAndExpriences: [{skill:'skill',exprience:'fresher'},{skill:'skill',exprience:'1 year'}]};
    // this.employeeService.addEmployee(this.employee);
    // this.employee = {id: 4, name: 'name',email: 'email',contact: 1234567890,gender: 'female',skillsAndExpriences: [{skill:'skill',exprience:'fresher'},{skill:'skill',exprience:'1 year'}]};
    // this.employeeService.addEmployee(this.employee);
    // this.employee = {id: 5, name: 'name',email: 'email',contact: 1234567890,gender: 'male',skillsAndExpriences: [{skill:'skill',exprience:'fresher'},{skill:'skill',exprience:'1 year'}]};
    // this.employeeService.addEmployee(this.employee);
    // this.employee = {id: 6, name: 'name',email: 'email',contact: 1234567890,gender: 'female',skillsAndExpriences: [{skill:'skill',exprience:'fresher'},{skill:'skill',exprience:'1 year'}]};
    // this.employeeService.addEmployee(this.employee);
  }

  getEmployees = this.employeeService.employeeDetails;

  skill !: skillsAndExpriences;
  employee !: Employee;

  deleteEmployee(employeeId : number, employeeName : String){
    console.log("Employee Id : " +(employeeId+1) +" is deleted...")
    confirm("Are you sure you want to delete : "+ employeeName) ?this.employeeService.deleteEmployee(employeeId):console.log("no row deleted...");


  }

  editEmployee(i : number){
    console.log("Employee Id : " +(i+1) +" is selected for edit...");
    const user : Employee = this.employeeService.employeeDetails[i];
    this.employeeService.editEmployeeGet(user,i);
  }


  //this.getEmployees = this.detail.details.find(x => x.id==this.activeRoute);

  showEmployee(){
    return (this.getEmployees)
  }

}
;
