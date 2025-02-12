// Import function to enable production mode optimizations
import { enableProdMode } from '@angular/core';
// Import function to bootstrap Angular in the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import the root module of our application
import { AppModule } from './app/app.module';
// Import environment configuration
import { environment } from './environments/environment';

// Check if we're running in production mode
if (environment.production) {
  // Enable production mode optimizations if true
  enableProdMode();
}

// Bootstrap the application with the root module
platformBrowserDynamic().bootstrapModule(AppModule)
  // Handle any errors during bootstrap
  .catch(err => console.error(err));
