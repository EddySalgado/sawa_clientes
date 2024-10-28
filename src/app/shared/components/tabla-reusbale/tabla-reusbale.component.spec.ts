import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReusbaleComponent } from './tabla-reusbale.component';

describe('TablaReusbaleComponent', () => {
  let component: TablaReusbaleComponent;
  let fixture: ComponentFixture<TablaReusbaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaReusbaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaReusbaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
