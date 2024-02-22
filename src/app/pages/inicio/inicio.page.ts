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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
