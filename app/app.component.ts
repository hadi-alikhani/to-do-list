import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "../components/task/task.component";
import { AddTaskComponent } from "../components/add-task/add-task.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, AddTaskComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoList';
}
