import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  calculateCelsiusFromFahrenheit,
  calculateFahrenheitFromCelsius,
} from '../utils/temperature';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  c: FormControl;
  f: FormControl;

  constructor() {
    this.c = new FormControl('');
    this.f = new FormControl('');
  }

  ngOnInit() {
    this.c.valueChanges.subscribe(value => {
      if (!value) {
        this.f.setValue('', {
          emitEvent: false,
        });
      } else {
        this.f.setValue(calculateFahrenheitFromCelsius(+value).toFixed(1), {
          emitEvent: false,
        });
      }
    });
    this.f.valueChanges.subscribe(value => {
      if (!value) {
        this.c.setValue('', {
          emitEvent: false,
        });
      } else {
        this.c.setValue(calculateCelsiusFromFahrenheit(+value).toFixed(1), {
          emitEvent: false,
        });
      }
    });
  }
}
