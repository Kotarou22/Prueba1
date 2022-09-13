import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoListarComponent } from './alumno-listar.component';

describe('AlumnoListarComponent', () => {
  let component: AlumnoListarComponent;
  let fixture: ComponentFixture<AlumnoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
