import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleNotComponent } from './components/detalle-not/detalle-not.component';
import { Detalle2NotComponent } from './components/detalle2-not/detalle2-not.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"detalleNot/:id",component:DetalleNotComponent},
  {path:"detalleNot2/:id",component:Detalle2NotComponent},
  {path:"formulario",component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
