import { Component, Output ,EventEmitter, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormArray, Validators } from '@angular/forms';
import { Employee , skillsAndExpriences } from './../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit  {
  editMode: Boolean = this.employeeService.editMode;
  title : String = "Add Employees ";

  constructor(public employeeService : EmployeeService){}

  addEmployee !: FormGroup;
  employee !: Employee;
  updatedEmployee !: Employee;

  editEmployee !: FormGroup;
  editEmployeeGet !: Employee;
  employeeId = this.employeeService.employeeDetails.length+1;


    ngOnInit (){

      if(this.editMode)// edit mode is true then open edit form
      {
        this.title =" Edit Employees "; // title of page
        const editEmployeeGet = this.employeeService.editEmployeeDetails;//geting details to update and set them to edit employee form

        this.editEmployee = new FormGroup({
          employeeId: new FormControl(editEmployeeGet.id , Validators.required),
          name: new FormControl(editEmployeeGet.name,Validators.required),
          email: new FormControl(editEmployeeGet.email,Validators.required),
          contact: new FormControl(editEmployeeGet.contact,Validators.required),
          gender: new FormControl(editEmployeeGet.gender,Validators.required),
          skillsAndExprience: new FormArray([])

          });
          for(let editEmployeeGetskil of editEmployeeGet.skillsAndExpriences ){
              this.skillsAndExprienceInEdit.push(
                new FormGroup({
                  skill: new FormControl(editEmployeeGetskil.skill,Validators.required),
                  exprience: new FormControl(editEmployeeGetskil.exprience,Validators.required)
                }));
          }
    }
      else{
        this.title =" Add Employees ";
        this.addEmployee = new FormGroup({
          employeeId: new FormControl('',Validators.required),
          name: new FormControl('',Validators.required),
          email: new FormControl('',Validators.required),
          contact: new FormControl('',[Validators.required,Validators.minLength(10)]),
          gender: new FormControl('',Validators.required),
          skillsAndExprience: new FormArray([
              new FormGroup({
                  skill: new FormControl('',Validators.required),
                  exprience: new FormControl('',Validators.required)
              })])
          });
      }



    }


    ////////////////////////////// Add-Employee Form Methods ////////////////////////////////////

    onSubmit(){ // add Data in employee Array from add Employee form.
    const formData = this.addEmployee.value;
    const skills = this.skillsAndExprience.value;

      this.employee = {
        id: formData.emploeeId ,
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        gender: formData.gender,
        skillsAndExpriences: skills
      };

      this.employeeId +=1;
      this.employeeService.addEmployee(this.employee);
    }

  get addEmployeeControls(){// To access skillsAndExprience form group in add employee form
    return this.addEmployee.controls;
  }
  get skillsAndExprience(){// To access skillsAndExprience form group in add employee form
    return this.addEmployee.get('skillsAndExprience') as FormArray;
  }


  // create skill fields dynamically
  createSkillsAndExpriences(){
     this.skillsAndExprience.push(
      new FormGroup({
        skill: new FormControl(''),
        exprience: new FormControl('')
     })
     );
  }
// delete skill fields dinamically
  deleteSkillsAndExprience(i : number){
    this.skillsAndExprience.removeAt(i);
  }

  ////////////////////////////// Edit-Employee Form Methods ////////////////////////////////////

  get skillsAndExprienceInEdit(){
    return this.editEmployee.get('skillsAndExprience') as FormArray;
  }
  get skillInEdit(){
    return this.skillsAndExprienceInEdit.get('skill') as FormControl;
  }
  get exprienceInEdit(){
    return this.skillsAndExprienceInEdit.get('exprience') as FormControl;
  }
  createSkillsAndExpriencesInEdit(){
    this.skillsAndExprienceInEdit.push(new FormGroup({
     skill: new FormControl(''),
     exprience: new FormControl('')
    }))
  }
    deleteSkillsAndExprienceInEdit(i : number){
      this.skillsAndExprienceInEdit.removeAt(i);
    }

    updateEmployeeData(){
      const formData = this.editEmployee.value;
      const skills = this.skillsAndExprienceInEdit.value;
      this.updatedEmployee = {
        id: formData.employeeId,
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        gender: formData.gender,
        skillsAndExpriences: skills
      };
      this.employeeService.UpdatedEmployee(this.updatedEmployee);

    }

}
