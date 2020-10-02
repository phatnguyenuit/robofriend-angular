import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-robo',
  templateUrl: './robo.component.html',
  styleUrls: ['./robo.component.css'],
})
export class RoboComponent implements OnInit {
  @Input()
  robo: Robo;

  imageSrc: string;

  constructor() {}

  ngOnInit(): void {
    this.imageSrc = `https://robohash.org/${this.robo.id}?200x200`;
  }
}
