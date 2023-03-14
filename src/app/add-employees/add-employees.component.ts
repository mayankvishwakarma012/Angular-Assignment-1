import { Component, Output ,EventEmitter, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormArray } from '@angular/forms';
import { Employee } from './../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit  {
  constructor(private employeeService : EmployeeService){}

  addEmployee !: FormGroup;
  employee : Employee = {};


    ngOnInit (){
      this.addEmployee = new FormGroup({
      employeeId: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      gender: new FormControl(''),
      skillsAndExprience: new FormArray([])
      });
    }

    getDetails(){
      //this.employeeDetails.push(this.employeeService.getEmployee());
      console.log(this.employeeService.getEmployee());
      //console.log(this.employeeDetails);
    }


  // @Output() EmployeeAdd = new EventEmitter<object>();



    onSubmit(addEmployee :FormGroup){
    const formData = this.addEmployee.value;
    const skills = formData.skillsAndExperience;
    const skillsAndExperience = { skills };

      this.employee = {
        id: formData.id,
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        gender: formData.gender,
        skillsAndExpriences: [skillsAndExperience]
      };
      console.log(this.employee);

      this.employeeService.addEmployee(this.employee);
      console.log('Employee added successfully! c');
    }


  get skillsAndExprience(){
    return this.addEmployee.get('skillsAndExprience') as FormArray;
  }

  get skills(){
    return this.skillsAndExprience.get('skills') as FormGroup;
  }
  get skill(){
    return this.skills.get('skill') as FormArray;
  }
  get exprience(){
    return this.skills.get('exprience') as FormArray;
  }

  deleteSkillsAndExprience(i : number){
    this.skillsAndExprience.removeAt(i);
    // this.exprience.removeAt(i);
  }


  createSkillsAndExpriences(){
     this.skillsAndExprience.push(new FormGroup({
      skill: new FormControl(''),
      exprience: new FormControl('')
     }))

  }

}
