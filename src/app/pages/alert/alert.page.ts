import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  // For V1
  alertButtons = ['Action','ok'];
  
  //For V2
  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });
    await alert.present();
  }
    //For V2.1 Multiple-buttons
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      // buttons: ['Cancel','Open', 'Action'],
      // Buttons can also be configured as an object (json): (NOTE. For further you can view IONIC docs in ion-alert)
      buttons: [
        {
          text: 'Ok!',
          handler: () => {console.log('Click on Ok')}
        },
        {
          text: 'Cancelar',
          // handler: () => {console.log('Click on Cancel')}
          role: 'cancel',
          cssClass: 'rojo'
        }
      ]
    });
    await alert.present();
  }

  //Input (Prompt)
  public buttons = [
    {
      text: 'Save',
      handler: (data: any) => {
        console.log(data)
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'rojo'
    }
  ];
  public alertInputs = [
    {
      name: 'name1',
      type: 'text',
      placeholder: 'Placeholder1',
    },
    {
      name: 'name2',
      type: 'text',
      placeholder: 'Placeholder1',
      value: 'name2',
      id: 'name2-id'
    },
    {
      name: 'name3',
      type: 'textarea',
      placeholder: 'Paragrhap',
      id: 'textarea'
    },
    {
      name: 'name4',
      type: 'date',
      min: '2000-01-01',
      max: '2050-01-01'
    },
    {
      name: 'name4',
      type: 'url',
      placeholder: 'Favourite Site ever',
      value: 'https://ionicframework.com/docs/'
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
}
