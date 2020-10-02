import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-robo-job-ad',
  templateUrl: './robo-job-ad.component.html',
  styleUrls: ['./robo-job-ad.component.css'],
})
export class RoboJobAdComponent implements AdComponent<RoboJob>, OnInit {
  @Input()
  data: RoboJob;

  constructor() {}

  ngOnInit(): void {}
}
