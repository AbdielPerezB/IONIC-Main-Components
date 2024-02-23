import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Wonder Woman', 'Batman', 'Flash'];

  constructor() { }

  ngOnInit() {
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    //Extra: Modificamos el arreglo original personajes para que los cambios se queden guardados
    const itemMover = this.personajes.splice(ev.detail.from, 1)[0];
    this.personajes.splice(ev.detail.to, 0, itemMover)

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();

    //Imprimimos el arreglo final para comprobar
    console.log(this.personajes);
  }

  //Toogle button
  public isDisabled: boolean = false;
  toggleReorder(){
    this.isDisabled = !this.isDisabled;
  }

}
