import { Component, OnInit } from '@angular/core';
import { RoboService, User } from '../../services/robo.service';

@Component({
  selector: 'app-robo-list',
  templateUrl: './robo-list.component.html',
  styleUrls: ['./robo-list.component.css'],
})
export class RoboListComponent implements OnInit {
  robos: User[];

  constructor(private roboService: RoboService) {}

  ngOnInit(): void {
    this.roboService
      .getList()
      .then((users) => (this.robos = users))
      .catch(console.error);
  }

  trackById(_: number, item: User) {
    return item.id;
  }
}
