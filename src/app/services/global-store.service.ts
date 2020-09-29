import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreService {
  private state: GlobalState;
  private store$: Subject<GlobalState>;
  constructor() {
    this.state = {};
    this.store$ = new ReplaySubject(1);
    this.store$.next({});
  }

  getState() {
    return this.state;
  }

  setState(partialState: Partial<GlobalState>) {
    const newState = {
      ...this.state,
      ...partialState,
    };
    this.state = newState;
    this.store$.next(newState);
  }
  subscribe(
    next?: (value: GlobalState) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription {
    return this.store$.subscribe(next, error, complete);
  }
}

export interface GlobalState {
  search?: string;
}
