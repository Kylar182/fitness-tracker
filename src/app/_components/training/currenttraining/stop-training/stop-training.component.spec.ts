/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StopTrainingDialog } from './stop-training.component';

describe('StopTrainingDialog', () => {
  let component: StopTrainingDialog;
  let fixture: ComponentFixture<StopTrainingDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopTrainingDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopTrainingDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
