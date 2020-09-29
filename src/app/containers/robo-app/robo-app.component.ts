import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoboService, User } from 'src/app/services/robo.service';
import { GlobalStoreService } from '../../services/global-store.service';

@Component({
  selector: 'app-robo-app',
  templateUrl: './robo-app.component.html',
  styleUrls: ['./robo-app.component.css'],
})
export class RoboAppComponent implements OnInit, OnDestroy {
  robos: User[];
  filteredRobos: User[];
  subscription: Subscription;

  constructor(
    private roboService: RoboService,
    private globalStore: GlobalStoreService
  ) {}

  ngOnInit(): void {
    this.subscription = this.globalStore.subscribe((state) =>
      console.log('[app-robo-app] state', state)
    );
    this.roboService
      .getList()
      .then((users) => {
        this.robos = users;
        this.filteredRobos = users;
      })
      .catch(console.error);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchEvent(search: string) {
    this.filteredRobos = this.robos.filter(({ name }) =>
      name.match(new RegExp(search, 'gi'))
    );
  }
}
