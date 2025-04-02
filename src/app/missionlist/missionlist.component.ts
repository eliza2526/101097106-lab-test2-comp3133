import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionlist',
  imports: [ CommonModule ],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css',
  standalone: true
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.launches = data;
    })
  }

}
