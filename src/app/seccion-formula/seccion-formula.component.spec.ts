import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFormulaComponent } from './seccion-formula.component';

describe('SeccionFormulaComponent', () => {
  let component: SeccionFormulaComponent;
  let fixture: ComponentFixture<SeccionFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionFormulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
