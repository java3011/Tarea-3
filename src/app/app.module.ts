import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Detalle2NotComponent } from './components/detalle2-not/detalle2-not.component';
import { DetalleNotComponent } from './components/detalle-not/detalle-not.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FinalComponent } from './components/final/final.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    Detalle2NotComponent,
    DetalleNotComponent,
    FormularioComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
