import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboDashboardComponent } from './robo-dashboard.component';

describe('RoboDashboardComponent', () => {
  let component: RoboDashboardComponent;
  let fixture: ComponentFixture<RoboDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoboDashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
