import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
  showGototop = false;

  @ViewChild('container') container: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  scrollTop() {
    this.container.nativeElement.scrollTo(0, 0)
  }

  onScroll($event) {
    this.showGototop = $event.target.scrollTop > 20;
  }

}
