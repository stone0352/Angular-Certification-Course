import { Component, EventEmitter, Output, Input, inject } from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;         //Can't bind to 'userId' since it isn't a known property of 'app-new-task'.
  @Output() close = new EventEmitter<void>()
//  @Output() add = new EventEmitter<NewTaskData>();              //  Un-commented when debugging
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService)

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    },
    this.userId
  );
  this.close.emit();
  }
}



// onSubmit(){
//   this.add.emit({
//     title: this.enteredTitle,
//     summary: this.enteredSummary,
//     date: this.enteredDate,
//   })
// }
