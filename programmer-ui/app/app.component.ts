import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'template-programmer-app',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}