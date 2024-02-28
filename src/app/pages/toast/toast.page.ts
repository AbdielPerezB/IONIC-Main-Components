import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentToast(){
    const toast= await this.toastCtrl.create({
      message: 'Your settings have been saved!',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Toast Header',
      message: 'Click to close!',
      position: 'top',
      buttons: [
        {
          side: 'start',
          text: 'Favourite',
          handler: () => {
            console.log('Favourite clicked')
          }
        },
        {
          role: 'cancel',
          text: 'Done',
          handler: () => {
            console.log('Cancel clicked')
          }
        }
      ]
    });

    await toast.present();
  }
}
