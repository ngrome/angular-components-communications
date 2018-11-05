import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MeetupRoutingModule } from './meetup-routing.module';
import { MeetupService } from './services/meetup.service';
import { MeetupListComponent } from './components/meetup-list/meetup-list.component';
import { MeetupDashboardComponent } from './containers/meetup-dashboard/meetup-dashboard.component';
import { MeetupDetailsComponent } from './components/meetup-detail/meetup-detail.component';

@NgModule({
  imports: [
    SharedModule,
    MeetupRoutingModule
  ],
  declarations: [
    MeetupDashboardComponent,
    MeetupListComponent,
    MeetupDetailsComponent
  ],
  providers: [MeetupService],
  exports: []
})
export class MeetupModule { }
