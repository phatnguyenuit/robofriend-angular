import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robo-filter',
  templateUrl: './robo-filter.component.html',
  styleUrls: ['./robo-filter.component.css'],
})
export class RoboFilterComponent implements OnInit {
  searchValue: string;
  constructor() {}

  ngOnInit(): void {
    this.searchValue = '';
  }
}
