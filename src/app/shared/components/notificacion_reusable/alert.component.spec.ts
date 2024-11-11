import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionReusableComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: NotificacionReusableComponent;
  let fixture: ComponentFixture<NotificacionReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
