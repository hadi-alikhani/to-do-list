import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskService } from '../../shared/services/task.service';
import { Task } from '../../shared/models/task.model';
import { TaskComponent } from '../task/task.component';
import { HoverEffectDirective } from '../../shared/directives/hover-effect.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    TaskComponent,
    HoverEffectDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private dialog: MatDialog,
    public taskService: TaskService
  ) {

  }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks()
  }

  openAddTaskDialog(task?: Task): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '400px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Tasks will automatically update through the effect
      }
    });
  }

  deleteTask(id: number): void {
    this.taskService.delete(id);
  }

  updateTaskStatus(task: Task): void {
    this.taskService.update(task);
  }

  editTask(task: Task): void {
    this.openAddTaskDialog(task);
  }
}
