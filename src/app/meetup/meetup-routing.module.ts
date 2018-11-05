import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { MeetupDashboardComponent } from './containers/meetup-dashboard/meetup-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MeetupDashboardComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MeetupRoutingModule { }
