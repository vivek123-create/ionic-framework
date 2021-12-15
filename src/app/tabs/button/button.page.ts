import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  name:string="";
  passward:string="";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log(this.name,this.passward)
    if(this.name && this.passward ) {
      // go to next page
      this.router.navigateByUrl('/tabs/segment');
   }
  }
}
