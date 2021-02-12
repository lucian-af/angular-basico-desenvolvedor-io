import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  mostrarMenu(): void {
    const menu = document.getElementById('navbarResponsivo');
    menu?.classList.toggle('collapse');
  }
}
