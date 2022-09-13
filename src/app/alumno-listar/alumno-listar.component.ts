import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alumnos } from '../modelos/alumnos';

@Component({
  selector: 'app-alumno-listar',
  templateUrl: './alumno-listar.component.html',
  styleUrls: ['./alumno-listar.component.scss']
})
export class AlumnoListarComponent {
  @Input() public alumnos: Array<Alumnos> = [];
  @Output() public posIndex = new EventEmitter<number>();

  public escucharRut(rut : number): void{
    const pos = this.alumnos.findIndex((elemento)=>{
      return rut === elemento.rut;
    });
    this.posIndex.emit(pos);
  }
}
