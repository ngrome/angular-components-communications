import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MeetupRoutingModule } from './meetup-routing.module';
import { MeetupService } from './services/meetup.service';
import { MeetupListComponent } from './components/meetup-list/meetup-list.component';
import { MeetupDashboardComponent } from './containers/meetup-dashboard/meetup-dashboard.component';
import { MeetupDetailsComponent } from './components/meetup-detail/meetup-detail.component';
import { MeetupListItemComponent } from './components/meetup-list-item/meetup-list-item.component';
import { MeetupStoreModule } from './store/meetup-store.module';

@NgModule({
  imports: [
    SharedModule,
    MeetupRoutingModule,
    MeetupStoreModule
  ],
  declarations: [
    MeetupDashboardComponent,
    MeetupListComponent,
    MeetupDetailsComponent,
    MeetupListItemComponent
  ],
  providers: [MeetupService],
  exports: []
})
export class MeetupModule { }
