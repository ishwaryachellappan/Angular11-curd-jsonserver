import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup }from '@angular/forms';
import { EmployeeModel } from './Employeedashboard.model';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  formValue!:FormGroup;
  employeeModelobj: EmployeeModel= new EmployeeModel();
  api: any;
  constructor(private formbuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
        Name:[''],
        Email:[''],
        Mobile:[''],
        Salary:['']
    })
  }

  postEmployeeDetails(){
    this.employeeModelobj.name=this.formValue.value.Name;
    this.employeeModelobj.Email=this.formValue.value.Email;
    this.employeeModelobj.mobile=this.formValue.value.mobile;
    this.employeeModelobj.salary=this.formValue.value.salary;
    
    this.api.postEmployee(this.employeeModelobj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("succesfull") 
      
        this.formValue.reset();
      
},
        (        err: any)=>{
        alert("something went wrong");
})
    
  }
}

  