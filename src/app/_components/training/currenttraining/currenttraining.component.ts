import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingDialog } from './stop-training/stop-training.component';
import { TrainingService } from 'src/app/_services/training.service';
import { Exercise } from 'src/app/_models/excercise.model';

@Component({
  selector: 'app-currenttraining',
  templateUrl: './currenttraining.component.html',
  styleUrls: ['./currenttraining.component.css']
})
export class CurrenttrainingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingDialog, {data: {
      progress: this.progress
    }});

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }

}
