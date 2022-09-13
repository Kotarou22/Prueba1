import { Component } from '@angular/core';
import { Alumnos } from './modelos/alumnos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public alumnoGuardado: Array<Alumnos> = [];

  public escuchoAlumno(nuevo:Alumnos):void{
    const id:number = this.alumnoGuardado.length+1;
    nuevo.idA = id;
    this.alumnoGuardado.push(nuevo);
  }
  public eliminarAlumno(id:number): void{
    this.alumnoGuardado.splice(id,1)
  }


}
