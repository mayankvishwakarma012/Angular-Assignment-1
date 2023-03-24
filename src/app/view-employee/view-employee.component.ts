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
  ngOnInit(): void {}

  getEmployees = this.employeeService.employeeDetails;

  skill !: skillsAndExpriences;
  employee !: Employee;


  showConfirmation = false;
  employeeIdToDelete !: number;
  employeeNameToDelete !: String;
  showSuccess = false;
  successMessage !: string;

  deleteEmployee(employeeId : number, employeeName : String){
    console.log("Employee Id : " +(employeeId+1) +" is deleted...")
    this.employeeIdToDelete = employeeId;
    this.employeeNameToDelete = employeeName;
    this.showConfirmation = true;
    // confirm("Are you sure you want to delete : "+ employeeName) ?this.employeeService.deleteEmployee(employeeId):console.log("no row deleted...");


  }
  confirmDelete(): void {
    this.showSuccess = true;
    this.employeeService.deleteEmployee(this.employeeIdToDelete);
    this.showConfirmation = false;
    this.successMessage = `The Employee ${this.employeeNameToDelete} is deleted successfully.`;
    setTimeout(() => {
      this.showSuccess = false;
      this.successMessage = '';
    }, 2000);


  }
  cancelDelete(): void {
    this.showConfirmation = false;
    this.employeeIdToDelete = -1;
    this.employeeNameToDelete = '';
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
