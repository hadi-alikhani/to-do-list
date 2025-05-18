import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks = signal<Task[]>([]);
  private taskId=0;
  constructor() {
    
   
  }



  add(task:Task) {
    const currentTasks = this.tasks();
    const newTask: Task = {
      id: ++this.taskId,
      ...task
    };
    this.tasks.update(tasks => [...tasks, newTask]);
    console.log(this.tasks())
  }

  delete(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  update(task: Task) {
    this.tasks.update(tasks =>
      tasks.map(t => t.id === task.id ? task : t)
    );
  }
}
