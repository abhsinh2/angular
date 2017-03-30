import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'template-programmer-main',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})

export class MainComponent {
  constructor(
    private router: Router,
  ) { }

  gotoDesigner(): void {
    this.router.navigate(['/designer']);
  }

  gotoDeployer(): void {
    this.router.navigate(['/deployer']);
  }

  gotoMonitor(): void {
    this.router.navigate(['/monitor']);
  }
}