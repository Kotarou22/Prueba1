import { Component, Output, EventEmitter } from '@angular/core';
import { Alumnos } from '../modelos/alumnos';

@Component({
  selector: 'app-formulario-alum',
  templateUrl: './formulario-alum.component.html',
  styleUrls: ['./formulario-alum.component.scss']
})
export class FormularioAlumComponent {
  @Output() public salidaNumber = new EventEmitter<number>();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public salidaAlumno = new EventEmitter<Alumnos>();

public nuevoAlumno: Alumnos ={
  rut : 0,
  nombre : "",
  apellido : "",
  edad : 0,
  seccion : ""
}

public cambiarRut(event: Event): void{
  const rut = event.target as HTMLInputElement;
  this.nuevoAlumno.rut = Number.parseInt(rut.value);
  this.salidaNumber.emit();
}

public cambiarNombre(event: Event): void{
  const nombre = event.target as HTMLInputElement;
  this.nuevoAlumno.nombre = nombre.value;
  this.salidaString.emit();
}

public cambiarApellido(event: Event): void{
  const apellido = event.target as HTMLInputElement;
  this.nuevoAlumno.apellido = apellido.value;
  this.salidaString.emit();
}

public cambiarEdad(event: Event): void{
  const edads = event.target as HTMLInputElement;
  this.nuevoAlumno.edad = Number.parseInt(edads.value);
  this.salidaNumber.emit();
}

public cambiarSeccion(event: Event): void{
  const Seccions = event.target as HTMLInputElement;
  this.nuevoAlumno.seccion = Seccions.value;
  this.salidaString.emit();
}

public guardarAlumno(): void{
  const copia: Alumnos = {
    ...this.nuevoAlumno
  }
  this.salidaAlumno.emit(copia);
  this.nuevoAlumno.rut=0;
  this.nuevoAlumno.nombre="";
  this.nuevoAlumno.apellido="";
  this.nuevoAlumno.edad=0;
  this.nuevoAlumno.seccion="";
  console.log("Mensaje desde hijo");
  this.salidaAlumno.emit();
  }
}
