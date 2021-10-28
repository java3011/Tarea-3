import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNotComponent } from './detalle-not.component';

describe('DetalleNotComponent', () => {
  let component: DetalleNotComponent;
  let fixture: ComponentFixture<DetalleNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleNotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
