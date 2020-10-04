import { Type as ComponentType } from '@angular/core';

export interface AdComponent<T = any> {
  data: T;
}

export class AdItem<T = any> {
  constructor(public component: ComponentType<{ data: T }>, public data: T) {}
}
