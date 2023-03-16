import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
const routes: Routes = [
    { path: '', redirectTo:'Employee-list', pathMatch:'full'  },
    { path: 'Add-employees', component: AddEmployeesComponent },
    { path: 'Edit-employees', component: AddEmployeesComponent },
    { path: 'Employee-list', component: ViewEmployeeComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
