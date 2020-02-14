import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-demo',
  templateUrl: './worker-demo.component.html',
  styleUrls: ['./worker-demo.component.scss']
})
export class WorkerDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  runWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('../../@core/web-wrokers/dashboard.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log(`Greetings: ${data}`);
      };
      worker.postMessage({ name: 'Kambagiri Swamy' });
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}
