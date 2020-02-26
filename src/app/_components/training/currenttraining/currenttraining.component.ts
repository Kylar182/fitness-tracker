import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currenttraining',
  templateUrl: './currenttraining.component.html',
  styleUrls: ['./currenttraining.component.css']
})
export class CurrenttrainingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  

}
