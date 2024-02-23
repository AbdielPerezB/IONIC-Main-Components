import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  //Para la página de  loading
  loading!: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  public mostrarLoading(){
    this.showLoading();

    setTimeout( () => {
      this.loading.dismiss();
    } , 2000);
  }
  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Charging...',
    });

    this.loading.present();
  }

}
