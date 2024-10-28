import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderReusableComponent } from './header-reusable.component';

describe('HeaderReusableComponent', () => {
  let component: HeaderReusableComponent;
  let fixture: ComponentFixture<HeaderReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderReusableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
