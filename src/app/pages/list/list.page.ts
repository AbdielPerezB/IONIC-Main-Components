import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios!: Observable<any>;

  @ViewChild(IonList) ionList!: IonList;

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    // this.dataservice.getUsuarios().subscribe(console.log);//el suscribe solo se usa si queremos ver los datos que recibimos
    this.usuarios = this.dataservice.getUsuarios();
  }

  favorite (user:any){
    console.log(user);
    this.ionList.closeSlidingItems();
  }
  share (user:any){
    console.log(user);
    this.ionList.closeSlidingItems();
  }

  delete(user:any){
    console.log('Delete', user);
    this.ionList.closeSlidingItems();
  }


}
