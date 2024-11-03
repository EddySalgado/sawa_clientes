import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAreaTrabajdorComponent } from './vista-area-trabajdor.component';

describe('VistaAreaTrabajdorComponent', () => {
  let component: VistaAreaTrabajdorComponent;
  let fixture: ComponentFixture<VistaAreaTrabajdorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaAreaTrabajdorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaAreaTrabajdorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
