import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-missionfilter',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css',
  standalone: true
})
export class MissionfilterComponent {
  filterYear: string = '';

  @Output() onFilter: EventEmitter<string> = new EventEmitter();

  filterMissions(): void {
    this.onFilter.emit(this.filterYear);
  }

}
