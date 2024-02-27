import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre:string | undefined;
  @Input() pais:string | undefined;

  constructor(private modelCrtl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modelCrtl.dismiss();
  }

  salirConArgumentos(){
    this.modelCrtl.dismiss(
      //Para cerrar enviando argumentos
      {
        nombre: 'Jonathan',
        pais: 'España'
      }
      );
  }

}
