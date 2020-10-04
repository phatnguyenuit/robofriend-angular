import { Component, OnDestroy, OnInit } from '@angular/core';

import { AdItem } from './components/ad/ad.component';
import { RoboJobAdComponent } from './components/ad/robo-job-ad/robo-job-ad.component';
import { RoboProfileAdComponent } from './components/ad/robo-profile-ad/robo-profile-ad.component';

import { ROBO_JOBS, ROBOS } from './constants/seeds';

import { RoboService } from './services/robo.service';

@Component({
  selector: 'app-robos',
  templateUrl: './robos.component.html',
  styleUrls: ['./robos.component.css'],
})
export class RobosComponent implements OnInit, OnDestroy {
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
        robo => new AdItem(RoboProfileAdComponent, robo)
      ),
      ...ROBO_JOBS.map(roboJob => new AdItem(RoboJobAdComponent, roboJob)),
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
      .then(robos => {
        this.robos = robos;
        this.filteredRobos = robos;
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
