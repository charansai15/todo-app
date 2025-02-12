// Import Component, Input decorators and OnInit interface from Angular core
import { Component, Input, type OnInit } from "@angular/core"
// Import Task interface type for type checking
import type { Task } from "../../constants/tasks.interface"
// Import TaskService for managing tasks
import { TaskService } from '../../services/task.service'

// Component decorator defining metadata
@Component({
  // Selector used to insert this component in other templates
  selector: "app-tasks-list",
  // Path to external HTML template file
  templateUrl: "./tasks-list.component.html",
})
// Component class implementing OnInit lifecycle hook
export class TasksListComponent implements OnInit {
  // Input property to receive tasks array from parent component
  @Input() tasks: Task[]

  // Constructor injecting TaskService for dependency injection
  constructor(private taskService: TaskService) {}

  // Lifecycle hook that runs when component initializes
  ngOnInit(): void {
    // Initialize tasks array by fetching from service
    this.tasks = this.taskService.getTasks()
  }

  /**
   * Removes a task from the tasks array
   * @param task The task to be removed
   */
  removeTask(task: Task) {
    // Call service method to remove the task
    this.taskService.removeTask(task)
  }

  /**
   * Toggles the completed status of a task
   * @param task The task to toggle
   */
  toggleCompleted(task: Task) {
    // Flip the completed boolean value
    task.completed = !task.completed
  }
}

