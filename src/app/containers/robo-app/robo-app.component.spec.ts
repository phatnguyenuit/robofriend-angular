import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboAppComponent } from './robo-app.component';

describe('RoboAppComponent', () => {
  let component: RoboAppComponent;
  let fixture: ComponentFixture<RoboAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
