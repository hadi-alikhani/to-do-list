import { TaskService } from './../../shared/services/task.service';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardFooter, MatCardHeader } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { Task } from '../../shared/models/task.model';
import { TaskStatusPipe } from '../../shared/pipes/task-status.pipe';
import { HoverEffectDirective } from '../../shared/directives/hover-effect.directive';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatIcon,
    MatCardHeader,
    MatCardFooter,
    MatCardActions,
    MatOption,
    MatFormFieldModule,
    FormsModule,
    MatCardContent,
    TaskStatusPipe,
    HoverEffectDirective
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit,OnChanges {
  constructor(private taskService: TaskService) { }
  ngOnChanges(changes: SimpleChanges): void {
this.hoverColor= this.task?.done ? 'green' :'red'
  }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    console.log(this.task,'tttt')

  }
  @Input() task!: Task;
  @Output() editTask = new EventEmitter<Task>();
  hoverColor:any;
  onEdit() {
    this.editTask.emit(this.task);
  }

  deleteTask(id: any) {
    this.taskService.delete(id)
  }
}
