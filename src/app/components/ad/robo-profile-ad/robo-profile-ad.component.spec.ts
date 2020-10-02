import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboProfileAdComponent } from './robo-profile-ad.component';

describe('RoboProfileAdComponent', () => {
  let component: RoboProfileAdComponent;
  let fixture: ComponentFixture<RoboProfileAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoboProfileAdComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboProfileAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
