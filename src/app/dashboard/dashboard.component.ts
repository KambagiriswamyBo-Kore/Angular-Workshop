import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SubSink } from 'subsink';
import { of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  cities: any[];

  @ViewChild('container') container: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.subs.sink = of(["New York", "Los Angeles", "Chicago", "San Antonio", "Dallas", "San Jose"]).subscribe(res => this.cities = res)
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}

