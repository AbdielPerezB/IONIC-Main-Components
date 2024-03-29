import { Component } from '@angular/core';
import {Componente} from './components/interfaces/interfaces'
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes!: Observable<Componente[]>;


  ngOnInit() {
    this.componentes = this.dataservice.getMenuOts();
  }
  constructor(private dataservice:DataService) {}


}
