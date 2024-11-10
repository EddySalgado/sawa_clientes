import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTrabajadorComponent } from './vista-trabajador.component';

describe('VistaTrabajadorComponent', () => {
  let component: VistaTrabajadorComponent;
  let fixture: ComponentFixture<VistaTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaTrabajadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
