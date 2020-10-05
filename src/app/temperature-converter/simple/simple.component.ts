import { Component } from '@angular/core';
import {
  calculateCelsiusFromFahrenheit,
  calculateFahrenheitFromCelsius,
} from './../utils/temperature';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
})
export class SimpleComponent {
  c: number | string;
  f: number | string;

  handleChangeC(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (!value) {
      this.f = '';
    } else {
      this.f = calculateFahrenheitFromCelsius(+target.value).toFixed(1);
    }
  }

  handleChangeF(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (!value) {
      this.c = '';
    } else {
      this.c = calculateCelsiusFromFahrenheit(+target.value).toFixed(1);
    }
  }
}
