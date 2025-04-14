import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Explicitly import RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule], // Add RouterModule to @Component imports
})
export class AppComponent {
  constructor(private router: Router) {} // Inject the Router service

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]); // Programmatically navigate to the specified route
  }
}
