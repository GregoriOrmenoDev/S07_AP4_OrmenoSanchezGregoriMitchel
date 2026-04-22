import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  links = ['Inicio', 'Catálogo', 'Beneficios', 'Contacto'];

  scrollTo(link: string) {
    const mapa: any = {
      'Inicio': 'hero',
      'Catálogo': 'catalogo',
      'Beneficios': 'beneficios',
      'Contacto': 'contacto'
    };
    const el = document.getElementById(mapa[link]);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}