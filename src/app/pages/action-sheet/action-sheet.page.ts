import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public onClick(){
    console.log('clicked');  
  }

  public actionSheetButtons = [
    {
      backdropDimiss: false,
      text: 'Delete',
      role: 'destructive',
      icon: 'trash-outline',
      cssClass: 'rojo',
      data: {
        action: 'delete'
      },
      handler: this.onClick
    },
    {
      text: 'Share',
      icon: 'share-outline',
      data: {
        action: 'Sahre'
      },
      handler: () => {
        console.log('Shared');
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

}
