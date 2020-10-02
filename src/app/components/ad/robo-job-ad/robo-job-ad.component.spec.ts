import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboJobAdComponent } from './robo-job-ad.component';

describe('RoboJobAdComponent', () => {
  let component: RoboJobAdComponent;
  let fixture: ComponentFixture<RoboJobAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoboJobAdComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboJobAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
