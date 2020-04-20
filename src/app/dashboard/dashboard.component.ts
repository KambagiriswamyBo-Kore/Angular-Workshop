import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SubSink } from 'subsink';
import { of } from 'rxjs';

declare const $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  showModal = false;
  cities: any[];

  @ViewChild('container') container: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.subs.sink = of(["New York", "Los Angeles", "Chicago", "San Antonio", "Dallas", "San Jose"]).subscribe(res => this.cities = res);

    $('#exampleModal4').on('hide.bs.modal',  (e)=> {
      console.log("hide called");
      setTimeout(()=>this.showModal = false);
    })

    $('#exampleModal4').on('show.bs.modal',  (e)=> {
      console.log("show called");
      setTimeout(()=>this.showModal = true);
    })
  }

  toggleModal(){
    // this.showModal = !this.showModal;
    $('#exampleModal4').modal('toggle')
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}

