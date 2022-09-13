import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { FormularioAlumComponent } from './formulario-alum/formulario-alum.component';
import { AlumnoListarComponent } from './alumno-listar/alumno-listar.component';
import { SeccionFormulaComponent } from './seccion-formula/seccion-formula.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    FormularioAlumComponent,
    AlumnoListarComponent,
    SeccionFormulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
