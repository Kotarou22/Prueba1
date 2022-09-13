import { Component, EventEmitter, Output,  } from '@angular/core';
import { Seccion } from '../modelos/seccion';


@Component({
  selector: 'app-seccion-formula',
  templateUrl: './seccion-formula.component.html',
  styleUrls: ['./seccion-formula.component.scss']
})
export class SeccionFormulaComponent {
  @Output() public salidaNumber = new EventEmitter<number>();
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public salidaSeccion = new EventEmitter<Seccion>();

  public nuevaSeccion: Seccion ={
    sigla : "",
    nombresC : ""
  }

  public cambiarSiglas(event: Event): void{
    const sigla = event.target as HTMLInputElement;
    this.nuevaSeccion.sigla = sigla.value;
    this.salidaString.emit();
  }
  public cambiarNombresC(event: Event): void{
    const nombreC = event.target as HTMLInputElement;
    this.nuevaSeccion.nombresC = nombreC.value;
    this.salidaString.emit();
  }
  public guardarSecc(): void{
    const copia: Seccion = {
      ...this.nuevaSeccion
    }
    this.salidaSeccion.emit(copia);
    this.nuevaSeccion.sigla="";
    this.nuevaSeccion.nombresC="";
    console.log("mensaje desde seccion");
    this.salidaSeccion.emit();
  }

}
