import { Component, OnInit, OnDestroy } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-sliding-panel',
  templateUrl: './sliding-panel.component.html',
  styleUrls: ['./sliding-panel.component.scss']
})
export class SlidingPanelComponent implements OnInit, OnDestroy {
  showModal = false;
  constructor() {
  }

  ngOnInit(): void {
    console.log("OnInit::SlidingPanelComponent");
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


  ngOnDestroy(){
    console.log("OnDestroy::SlidingPanelComponent");
  }

}
