import { Component, OnInit } from '@angular/core';
import { IonLoaderService } from '../ion-loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  constructor (private router : Router
    ,private ionLoaderService: IonLoaderService) { }

  ngOnInit() {
    this.ionLoaderService.simpleLoader();
    setTimeout(() => {
      this.hideLoader();
    }, 3000);
  }

  displayAutoLoader() {
    this.ionLoaderService.autoLoader();
  }

  showLoader() {
    this.ionLoaderService.simpleLoader();
  }

  hideLoader() {
    this.ionLoaderService.dismissLoader();
  }

  customizeLoader() {
   this.ionLoaderService.customLoader();
  }
  presentActionSheet() {
    this.router.navigateByUrl('hardwork')
  }

}
