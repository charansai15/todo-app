// Import TestBed utility for configuring testing module
import { TestBed } from '@angular/core/testing';
// Import RouterTestingModule for routing-related testing
import { RouterTestingModule } from '@angular/router/testing';
// Import the component to be tested
import { AppComponent } from './app.component';

// Main test suite for AppComponent
describe('AppComponent', () => {
  // Setup before each test
  beforeEach(async () => {
    // Configure testing module with required dependencies
    await TestBed.configureTestingModule({
      // Import required testing modules
      imports: [
        RouterTestingModule
      ],
      // Declare components needed for testing
      declarations: [
        AppComponent
      ],
    // Compile components in the testing module
    }).compileComponents();
  });

  // Test case for component creation
  it('should create the app', () => {
    // Create component fixture
    const fixture = TestBed.createComponent(AppComponent);
    // Get component instance
    const app = fixture.componentInstance;
    // Assert component exists
    expect(app).toBeTruthy();
  });

  // Test case for component title property
  it(`should have as title 'todoApp'`, () => {
    // Create component fixture
    const fixture = TestBed.createComponent(AppComponent);
    // Get component instance
    const app = fixture.componentInstance;
    // Assert title matches expected value
    expect(app.title).toEqual('todoApp');
  });

  // Test case for rendered title in template
  it('should render title', () => {
    // Create component fixture
    const fixture = TestBed.createComponent(AppComponent);
    // Trigger change detection
    fixture.detectChanges();
    // Get access to DOM element
    const compiled = fixture.nativeElement as HTMLElement;
    // Assert title text is rendered correctly
    expect(compiled.querySelector('.content span')?.textContent).toContain('todoApp app is running!');
  });
});
