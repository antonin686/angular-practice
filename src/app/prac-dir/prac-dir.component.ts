import { Component } from '@angular/core';

@Component({
  selector: 'app-prac-dir',
  templateUrl: './prac-dir.component.html',
  styleUrls: ['./prac-dir.component.css'],
})
export class PracDirComponent {
  showDetails: boolean = false;
  logs: string[] = [];

  showDetailsHandler() {
    this.showDetails = !this.showDetails;
    this.logs.push(`Details ${this.showDetails ? 'Shown' : 'Hidden'} at ${new Date().getTime()}`);
  }
}
