import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboFilterComponent } from './robo-filter.component';

describe('RoboFilterComponent', () => {
  let component: RoboFilterComponent;
  let fixture: ComponentFixture<RoboFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
