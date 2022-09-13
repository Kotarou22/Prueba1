import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlumComponent } from './formulario-alum.component';

describe('FormularioAlumComponent', () => {
  let component: FormularioAlumComponent;
  let fixture: ComponentFixture<FormularioAlumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAlumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
