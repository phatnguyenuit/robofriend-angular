import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-robo-profile-ad',
  templateUrl: './robo-profile-ad.component.html',
  styleUrls: ['./robo-profile-ad.component.css'],
})
export class RoboProfileAdComponent implements AdComponent<Robo>, OnInit {
  @Input()
  data: Robo;

  constructor() {}

  ngOnInit() {}
}
