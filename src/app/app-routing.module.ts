// Import NgModule decorator from Angular core
import { NgModule } from '@angular/core';
// Import routing utilities from Angular router
import { RouterModule, Routes } from '@angular/router';
// Import components used in routes
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';
import { HomeComponent } from './components/home/home.component';

// Define application routes
const routes: Routes = [
  // Default route shows home component
  { path: '', component: HomeComponent },
  // Route for viewing task list
  { path: 'tasks', component: TasksListComponent },
  // Route for creating new tasks
  { path: 'create-task', component: TasksFormComponent },
  // Wildcard route redirects to home
  { path: '**', redirectTo: '' }
];

// NgModule decorator to define module metadata
@NgModule({
  // Import RouterModule with our route configuration
  imports: [RouterModule.forRoot(routes)],
  // Export RouterModule so other modules can use routing
  exports: [RouterModule]
})
// Routing module class definition
export class AppRoutingModule { }
