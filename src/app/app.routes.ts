import { Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

export const routes: Routes = [
    { path: '', redirectTo: '/missions', pathMatch: 'full' },
    { path: 'missions', component: MissionlistComponent },
    { path: 'missions/:flight_number', component: MissiondetailsComponent },
];
