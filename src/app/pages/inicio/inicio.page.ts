import { Component, OnInit } from '@angular/core';

// Es como si hicieramos un objeto
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //Utilizamos la interdaz que creamos
  public componentes: Componente[] = [
    {
      icon: "american-football-outline",
      name: "Action Sheet",
      redirectTo: "/action-sheet"
    },
    {
      icon: "alert-circle-outline",
      name: "Alert",
      redirectTo: "/alert"
    },
    {
      icon: "beaker-outline",
      name: "Avatar",
      redirectTo: "/avatar"
    },
    {
      icon: "radio-button-off-outline",
      name: "Buttons",
      redirectTo: "/button"
    },
    {
      icon: "card-outline",
      name: "Cards",
      redirectTo: "/card"
    },
    {
      icon: "checkmark-circle-outline",
      name: "Check Box",
      redirectTo: "/check"
    },
    {
      icon: "calendar-outline",
      name: "Datatime",
      redirectTo: "/date-time"
    },
    {
      icon: "car-outline",
      name: "Fab Buttons",
      redirectTo: "/fab"
    },
    {
      icon: "grid-outline",
      name: "Grid",
      redirectTo: "/grid"
    },
    {
      icon: "infinite-outline",
      name: "Infinite",
      redirectTo: "/infinite"
    },
    {
      icon: "hammer-outline",
      name: "Input",
      redirectTo: "/input"
    },
    {
      icon: "list-outline",
      name: "List - Sliding",
      redirectTo: "/list"
    },
    {
      icon: "reorder-three-outline",
      name: "List - reorder",
      redirectTo: "/list-reorder"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
