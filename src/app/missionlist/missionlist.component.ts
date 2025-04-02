import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { CommonModule } from '@angular/common';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-missionlist',
  imports: [ CommonModule, MissionfilterComponent, RouterModule, MatCardModule, MatToolbarModule ],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css',
  standalone: true
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];
  filteredLaunches: any[] = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.launches = data;
      this.filteredLaunches = data;
    });
  }

  filterMissions(year: string): void {
    if(year) {
      this.filteredLaunches = this.launches.filter(mission => mission.launch_year === year);
    } else {
      this.filteredLaunches = this.launches
    }
  }

}
