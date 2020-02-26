import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Exercise } from 'src/app/_models/Excercise';

@Component({
  selector: 'app-newtraining',
  templateUrl: './newtraining.component.html',
  styleUrls: ['./newtraining.component.css']
})
export class NewtrainingComponent implements OnInit {
  exercises: Exercise[];
  selectedExercise: Exercise;
  @Output() trainingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.exercises = [
      { id: 'crunches', name: 'Crunches' },
      { id: 'touch-toes', name: 'Touch Toes' },
      { id: 'side-lunges', name: 'Side Lunges' },
      { id: 'burpees', name: 'Burpees' }
    ];
  }

  onStartTraining() {
    this.trainingStart.emit();
  }
}
