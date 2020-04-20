import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sliding-panel',
  templateUrl: './sliding-panel.component.html',
  styleUrls: ['./sliding-panel.component.scss']
})
export class SlidingPanelComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("OnInit::SlidingPanelComponent");
  }

  ngOnDestroy(){
    console.log("OnDestroy::SlidingPanelComponent");
  }

}
