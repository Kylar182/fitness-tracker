import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Exercise } from 'src/app/_models/excercise.model';
import { TrainingService } from 'src/app/_services/training.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newtraining',
  templateUrl: './newtraining.component.html',
  styleUrls: ['./newtraining.component.css']
})
export class NewtrainingComponent implements OnInit {
  exercises: Exercise[] = [];
  selectedExercise: string;
  @Output() trainingStart = new EventEmitter<void>();

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
