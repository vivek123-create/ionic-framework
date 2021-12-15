import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) { }

  ngOnInit() {}
  login() {
  
      this.router.navigateByUrl('/tabs/button');
   
  }
}




