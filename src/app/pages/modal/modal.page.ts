import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
  }

  async mostrarModal(){
    
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      //Properties that I will send to page-info
      componentProps:{
        nombre: 'Abdiel',
        pais: 'México'
      }
    });
    modal.present();

    //Para recibir la respuesta del modal
    //(Así nos llega el arreglo entero)const resp = await modal.onDidDismiss();
    // Así nos llega solo la parte del json con la clave data
    const {data} = await modal.onDidDismiss();
    console.log(data);

  }

}
