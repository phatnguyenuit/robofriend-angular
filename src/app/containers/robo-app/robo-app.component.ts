import { Component, OnDestroy, OnInit } from '@angular/core';

import { AdItem } from 'src/app/components/ad/ad.component';
import { RoboJobAdComponent } from 'src/app/components/ad/robo-job-ad/robo-job-ad.component';
import { RoboProfileAdComponent } from 'src/app/components/ad/robo-profile-ad/robo-profile-ad.component';
import { ROBOS, ROBO_JOBS } from 'src/app/constants/seeds';
import { RoboService } from 'src/app/services/robo.service';

@Component({
  selector: 'app-robo-app',
  templateUrl: './robo-app.component.html',
  styleUrls: ['./robo-app.component.css'],
})
export class RoboAppComponent implements OnInit, OnDestroy {
  robos: Robo[];
  filteredRobos: Robo[];
  loading: boolean;
  search: string;

  ads: AdItem[];

  constructor(private roboService: RoboService) {
    this.loading = false;
    this.robos = [];
    this.filteredRobos = [];
    this.search = '';

    this.ads = [
      ...ROBOS.slice(0, 3).map(
        (robo) => new AdItem(RoboProfileAdComponent, robo)
      ),
      ...ROBO_JOBS.map((roboJob) => new AdItem(RoboJobAdComponent, roboJob)),
    ];
  }

  ngOnInit() {
    console.log('Disable adblock to see ads');
    this.fetchRobos();
  }

  ngOnDestroy() {}

  fetchRobos() {
    this.loading = true;
    this.roboService
      .getList()
      .then((users) => {
        this.robos = users;
        this.filteredRobos = users;
      })
      .catch(console.error)
      .finally(() => {
        this.loading = false;
      });
  }

  searchEvent(search: string) {
    this.search = search;
    this.filteredRobos = this.robos.filter(({ name }) =>
      name.match(new RegExp(search, 'gi'))
    );
  }

  refreshEvent() {
    this.search = '';
    this.fetchRobos();
  }
}
