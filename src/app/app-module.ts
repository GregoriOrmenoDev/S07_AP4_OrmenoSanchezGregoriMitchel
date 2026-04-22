import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Courses } from './components/courses/courses';
import { Benefits } from './components/benefits/benefits';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Hero,
    Courses,
    Benefits,
    Contact,
    Footer
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }