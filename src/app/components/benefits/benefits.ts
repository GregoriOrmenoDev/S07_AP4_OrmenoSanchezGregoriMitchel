import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: false,
  templateUrl: './benefits.html',
  styleUrl: './benefits.css'
})
export class Benefits {
  beneficios = [
    { icono: '⚡', titulo: 'Descarga instantánea', descripcion: 'Accede a tus juegos en segundos sin esperas.' },
    { icono: '🔒', titulo: 'Pagos seguros', descripcion: 'Transacciones protegidas con cifrado de extremo a extremo.' },
    { icono: '🌍', titulo: 'Catálogo global', descripcion: 'Títulos de todo el mundo disponibles en tu región.' },
    { icono: '🎁', titulo: 'Ofertas exclusivas', descripcion: 'Descuentos y promociones solo para miembros NexusGames.' },
  ];
}