import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms' 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name: string = "Vivek"
  password: string = "123456"
  VivekForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.VivekForm = this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      code:[''],
      conformcode:[''],
      dateofbirth:['']
    })
  }
  login() {
    if(this.VivekForm.controls.firstname.value == this.name && this.VivekForm.controls.code.value == this.password)
    {
      this.router.navigateByUrl('/tabs/button');
    }
    else
    {
      alert("Invalid firstname or password")
    }
    // console.log(this.VivekForm.value)
    // console.log("firstname: ",typeof this.VivekForm.controls.firstname.toString())
    // console.log("lastname: ",this.VivekForm.controls.lastname)
    // console.log("email: ",this.VivekForm.controls.email)
//    
  }
  getDate(ev:any)
  {
    console.log(ev)
  }
}



