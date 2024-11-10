import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSucursalComponent } from './vista-sucursal.component';

describe('VistaSucursalComponent', () => {
  let component: VistaSucursalComponent;
  let fixture: ComponentFixture<VistaSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaSucursalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
