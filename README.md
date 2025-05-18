# Angular Todo List Application




## Technologies Used

- Angular 18
- Angular Material
- Tailwind CSS
- TypeScript
- RxJS
- Angular Signals

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v18)

## Installation
run 'npm i ' before 'ng serve'  to inastall all dependecies of project like angular material and twailwind and...


## Project Structure

```
toDoList/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── add-task/
│   │   │   └── task/
│   │   ├── shared/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   └── directives/
│   │   └── app.config.ts
│   └── ...
└── ...
```

## Key Components

### Dashboard Component
- Main view of the application
- Displays all tasks in a responsive grid
- Handles task management operations

### Add Task Component
- Dialog-based component for adding/editing tasks
- Form validation
- Edit mode with readonly title

### Task Component
- Individual task display
- Status toggle
- Edit and delete functionality
- Custom hover effects

### Task Service
- Manages task data using Angular Signals


## Custom Directives
- change background color based on task status when hover it
## custom pipe
-translte task status to 'to do' and 'done' base on boolean value of done property of task

## Usage

1. **Adding a Task**
   - Click the "Add New Task" button
   - Enter task title
   - Select status
   - Click "Add"

2. **Editing a Task**
   - Click the edit icon on any task
   - Modify the task status
   - Click "Add"

3. **Deleting a Task**
   - Click the delete icon on any task
   - Task will be removed immediately

4. **Marking Tasks Complete**
   - Click the checkbox next to any task
   - Task status will toggle between complete/incomplete





