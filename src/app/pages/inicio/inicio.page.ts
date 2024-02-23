import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import {Componente} from '../../components/interfaces/interfaces'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private menuCtrl:MenuController,
              private dataservice:DataService) { }

  ngOnInit() {
    this.componentes = this.dataservice.getMenuOts();
  }

  mostrarMenu(){
    this.menuCtrl.open('first');
  }

}
