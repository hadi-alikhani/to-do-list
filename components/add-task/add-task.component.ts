import { CommonModule } from '@angular/common';
import { Component, Inject, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { TaskService } from '../../shared/services/task.service';
import { Task } from '../../shared/models/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  selectedStatus: any;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private dialogRefrence: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
    // this.isEditMode = !!data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [{ value: this.data?.title || '', disabled: this.isEditMode }, Validators.required],
      done: [this.data?.done || false, Validators.required]
    });
  }

  onClose() {
    this.dialogRefrence.close();
  }

  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.getRawValue();
      if (this.data) {
        
        const updatedTask: Task = {
          id: this.data.id,
          title: formValue.title,
          done: formValue.done
        };
        this.taskService.update(updatedTask);
      } else {
        
        this.taskService.add({
          title: formValue.title,
          done: formValue.done
        });
      }
      this.dialogRefrence.close(true);
    }
  }

  form!: FormGroup;
}
