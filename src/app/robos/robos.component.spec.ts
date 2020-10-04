import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobosComponent } from './robos.component';
import { RoboFilterComponent } from './components/robo-filter/robo-filter.component';
import { RoboListComponent } from './components/robo-list/robo-list.component';
import { RoboComponent } from './components/robo/robo.component';
import { RoboService } from './services/robo.service';

describe('RobosComponent', () => {
  let component: RobosComponent;
  let fixture: ComponentFixture<RobosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RobosComponent,
        RoboListComponent,
        RoboComponent,
        RoboFilterComponent,
      ],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [RoboService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
