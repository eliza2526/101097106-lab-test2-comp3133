import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  imports: [ CommonModule ],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css',
  standalone: true
})
export class MissiondetailsComponent implements OnInit {
  missionDetails: any;

  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');
    
    if (flightNumber) {
      const url = `${this.apiUrl}/${flightNumber}`; // Construct a proper URL
      this.http.get(url).subscribe({
        next: (data) => {
          this.missionDetails = data;
        },
        error: (err) => {
          console.error('Error fetching mission details:', err);
        }
      });
    } else {
      console.error('Flight number is not available. Please check the route parameter.');
    }
  }  
}
