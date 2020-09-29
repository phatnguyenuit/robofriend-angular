import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GlobalStoreService } from '../../services/global-store.service';

@Component({
  selector: 'app-robo-filter',
  templateUrl: './robo-filter.component.html',
  styleUrls: ['./robo-filter.component.css'],
})
export class RoboFilterComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  subscription: Subscription;

  @Output()
  searchEvent = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder,
    private globalStore: GlobalStoreService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: '',
    });

    this.searchForm.valueChanges.subscribe((data) =>
      this.globalStore.setState({
        search: data.search,
      })
    );

    this.subscription = this.globalStore.subscribe((state) =>
      console.log('[app-robo-filter] state', state)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const { search } = this.searchForm.value;
    this.searchEvent.emit(search);
  }
}
