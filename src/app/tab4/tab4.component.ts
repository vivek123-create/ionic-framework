import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.scss'],
})
export class Tab4Component implements OnInit {
  name: any;
  passward: any;

  constructor(private router: Router) { }

  ngOnInit() {}
  login() {

      this.router.navigateByUrl('/tabs/button');
   
  }
}
