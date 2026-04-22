import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-courses></app-courses>
    <app-benefits></app-benefits>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class AppComponent { }