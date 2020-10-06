import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { RequestService } from './request/request.service';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css'],
})
export class ForkJoinComponent implements OnInit {
  public propOne: string;
  public propTwo: string;
  public propThree: string;
  constructor(private request: RequestService) {}

  ngOnInit() {
    // simulate 3 requests with different delays
    forkJoin(
      this.request.makeRequest('Request One', 2000),
      this.request.makeRequest('Request Two', 1000),
      this.request.makeRequest('Request Three', 3000)
    ).subscribe(([res1, res2, res3]) => {
      this.propOne = res1;
      this.propTwo = res2;
      this.propThree = res3;
    });
  }
}
