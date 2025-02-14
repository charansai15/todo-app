// Import NgModule decorator from Angular core
import { NgModule } from '@angular/core';
// Import BrowserModule for running app in browser
import { BrowserModule } from '@angular/platform-browser';
// Import FormsModule for form handling
import { FormsModule } from '@angular/forms';

// Import custom routing module
import { AppRoutingModule } from './app-routing.module';
// Import root component
import { AppComponent } from './app.component';
// Import navigation component
import { NavbarComponent } from './components/navbar/navbar.component';
// Import task form component
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';
// Import task list component
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
// Import home component
import { HomeComponent } from './components/home/home.component';

// NgModule decorator defining module metadata
@NgModule({
  // Components that belong to this module
  declarations: [
    AppComponent,        // Root component
    NavbarComponent,     // Navigation component
    TasksListComponent,  // Task list component
    TasksFormComponent,  // Task form component
    HomeComponent        // Home component
    
  ],
  // External modules needed by this module
  imports: [
    BrowserModule,       // Essential browser functionality
    AppRoutingModule,    // Custom routing configuration
    FormsModule         // Form handling functionality
  ],
  // Services to be provided (empty array as services use providedIn: 'root')
  providers: [],
  // Component to be loaded first
  bootstrap: [AppComponent]
})
// Root module class definition
export class AppModule { }
