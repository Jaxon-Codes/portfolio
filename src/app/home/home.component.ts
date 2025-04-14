import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  openEmail(): void {
    window.location.href = 'mailto:jaxon_janes@yahoo.com?subject=Job Opportunity&body=Hello Jaxon,';
  }
}