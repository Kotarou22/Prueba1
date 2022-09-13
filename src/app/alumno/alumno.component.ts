import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alumnos } from '../modelos/alumnos';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {
  @Input() public alumnos!: Alumnos;
  @Output() public rutalumno = new EventEmitter<number>();

  public emitirRut(): void{
    this.alumnos.rut;
    this.rutalumno.emit(this.alumnos.rut);
  }

}
