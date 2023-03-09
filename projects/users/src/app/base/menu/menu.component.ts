import { Component } from '@angular/core';
import { MenuItems } from 'projects/users/src/types/menu.items';

@Component({
  selector: 'sdi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items: MenuItems[];
  constructor() {
    this.items = [
      {
        path: 'home', // Esta es la etiqueta que hayamos puesto en el routing
        label: 'Inicio', // Nombre a mostrar
      },
      {
        path: 'about',
        label: 'About',
      },
      {
        path: 'tasks',
        label: 'Tareas',
      },
    ];
  }
}
