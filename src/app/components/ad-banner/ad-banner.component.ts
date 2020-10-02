import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdDirective } from 'src/app/directives/ad/ad.directive';
import { AdComponent, AdItem } from '../ad/ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css'],
})
export class AddBannerComponent implements OnInit, OnDestroy {
  @Input()
  ads: AdItem[];

  @ViewChild(AdDirective, { static: true })
  appAd: AdDirective;

  interval: number;
  currentAdIndex = -1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      adItem.component
    );

    const viewContainerRef = this.appAd.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      componentFactory
    );
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 5000);
  }
}
