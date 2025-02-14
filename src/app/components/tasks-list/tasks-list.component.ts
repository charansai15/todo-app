// Import Component, Input decorators and OnInit interface from Angular core
import { Component, Input, OnInit, OnDestroy } from "@angular/core"
// Import Task interface type for type checking
import type { Task } from "../../constants/tasks.interface"
// Import TaskService for managing tasks
import { TaskService } from '../../services/task.service'
import { Subscription } from 'rxjs'

// Component decorator defining metadata
@Component({
  // Selector used to insert this component in other templates
  selector: "app-tasks-list",
  // Path to external HTML template file
  templateUrl: "./tasks-list.component.html",
  styleUrls: ['./tasks-list.component.scss']
})
// Component class implementing OnInit lifecycle hook
export class TasksListComponent implements OnInit, OnDestroy {
  // Input property to receive tasks array from parent component
  @Input() tasks: Task[]
  private tasksSub: Subscription

  // Constructor injecting TaskService for dependency injection
  constructor(private taskService: TaskService) {}

  // Lifecycle hook that runs when component initializes
  ngOnInit(): void {
    this.tasksSub = this.taskService.tasks$.subscribe(
      tasks => this.tasks = tasks
    )
  }

  ngOnDestroy() {
    if (this.tasksSub) {
      this.tasksSub.unsubscribe()
    }
  }

  /**
   * Removes a task from the tasks array
   * @param task The task to be removed
   */
  removeTask(task: Task) {
    this.taskService.removeTask(task)
  }

  /**
   * Toggles the completed status of a task
   * @param task The task to toggle
   */
  toggleCompleted(task: Task) {
    const updatedTask = { ...task, completed: !task.completed }
    this.taskService.updateTask(updatedTask)
  }
}

