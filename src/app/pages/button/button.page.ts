import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  // Para el botón de favoritos del header
  favorito:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.favorito = !this.favorito; //Se le asigna el valor opuesto al que actualmente tiene
  }

}
