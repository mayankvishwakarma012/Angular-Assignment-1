import { Router } from '@angular/router';
import { Component, Output ,EventEmitter, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Employee , skillsAndExpriences } from './../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit  {
  editMode: Boolean = this.employeeService.editMode;
  title !: String;

  constructor(public employeeService : EmployeeService , public router : Router) {}

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

        console.log(editEmployeeGet.contact);
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
        id: formData.employeeId ,
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        gender: formData.gender,
        skillsAndExpriences: skills
      };

      this.employeeId +=1;
      this.employeeService.addEmployee(this.employee);
    }

    navigateToEmployeeList() { //navigate to employee list
      this.router.navigate(['/Employee-list']);
    }
  get addEmployeeControls(){ //To access addEmployee form group
    return (this.addEmployee as FormGroup).controls;
  }
  get skillsAndExprience(){// To access skillsAndExprience form group in add employee form
    return this.addEmployee.get('skillsAndExprience') as FormArray;
  }



  // create skill fields dynamically in addEmployee form
  createSkillsAndExpriences(){
     this.skillsAndExprience.push(
      new FormGroup({
        skill: new FormControl('',Validators.required),
        exprience: new FormControl('',Validators.required)
     })
     );
  }
// delete skill fields dinamically in addEmployee form
  deleteSkillsAndExprience(i : number){
    this.skillsAndExprience.removeAt(i);
  }

  ////////////////////////////// Edit-Employee Form Methods ////////////////////////////////////


  get editEmployeeControls(){
    return (this.editEmployee as FormGroup).controls;
  }
  get skillsAndExprienceInEdit(){
    return this.editEmployee.get('skillsAndExprience') as FormArray;
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
