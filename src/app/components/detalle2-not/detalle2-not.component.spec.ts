import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle2NotComponent } from './detalle2-not.component';

describe('Detalle2NotComponent', () => {
  let component: Detalle2NotComponent;
  let fixture: ComponentFixture<Detalle2NotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detalle2NotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detalle2NotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
