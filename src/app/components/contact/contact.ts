import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';
  enviado: boolean = false;

  enviar() {
    if (!this.nombre || !this.correo || !this.mensaje) return;
    this.enviado = true;
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
    setTimeout(() => this.enviado = false, 4000);
  }
}