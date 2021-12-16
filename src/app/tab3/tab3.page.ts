import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {



  constructor(public alertController: AlertController) {}
  
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'first name'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
         
          placeholder: 'last name '
        },
      
     
     
        
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
       
        {
          name: 'name5',
          type: "email",
          placeholder: 'emial',
        },
       
        {
          name: 'name6',
          type: 'password',
          placeholder: 'password',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 8,
            inputmode: 'decimal'
          }
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  
  

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
  }




















}
  




