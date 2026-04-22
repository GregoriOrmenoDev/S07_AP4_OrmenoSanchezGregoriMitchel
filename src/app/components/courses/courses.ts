import { Component } from '@angular/core';

interface Juego {
  nombre: string;
  genero: string;
  precio: string;
  imagen: string;
}

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
  juegos: Juego[] = [
    { nombre: 'Shadow Realm', genero: 'RPG / Acción', precio: 'S/ 89.90', imagen: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' },
    { nombre: 'Turbo Racers X', genero: 'Carreras', precio: 'S/ 59.90', imagen: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400' },
    { nombre: 'Galaxy Siege', genero: 'Estrategia', precio: 'S/ 74.90', imagen: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400' },
    { nombre: 'Dark Forest', genero: 'Survival / Horror', precio: 'S/ 49.90', imagen: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400' },
    { nombre: 'Arena Fighters', genero: 'Pelea', precio: 'S/ 64.90', imagen: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400' },
    { nombre: 'Pixel Quest', genero: 'Aventura / Indie', precio: 'S/ 29.90', imagen: 'https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=400' },
  ];

  comprar(nombre: string) {
    alert(`¡Agregaste "${nombre}" al carrito! 🛒`);
  }
}