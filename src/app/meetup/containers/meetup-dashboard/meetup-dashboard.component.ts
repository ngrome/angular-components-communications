import { LoadMeetups } from './../../store/actions/meetup.action';
import { FilterComponent } from './../../../shared/components/filter/filter.components';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MeetupService } from '../../services/meetup.service';
import { Meetup } from '../../models/meetup';

// NgRx
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './meetup-dashboard.component.html',
  styleUrls: ['./meetup-dashboard.component.css']
})
export class MeetupDashboardComponent implements OnInit {

  meetups$: Observable<Meetup[]>;
  filteredMeetups: Meetup[];
  @ViewChild(FilterComponent) filterComponent: FilterComponent;

  constructor(
    private meetupService: MeetupService,
    private store: Store<AppState>) {
      this.meetups$ = this.store.select(state => state.meetupState.meetups);
  }

  ngOnInit() {
    this.store.dispatch(new LoadMeetups());
    this.meetups$.subscribe(
      data => {
        this.filteredMeetups = data;
        this.filterComponent.filter = this.meetupService.filter;
      }
    );
  }

  onValueChange(value: string): void {
    this.meetupService.filter = value;
    this.performFilter(value);
  }

  performFilter(filterBy?: string): void {
    if (filterBy) {
        this.meetups$.subscribe(
          meetups => this.filteredMeetups = meetups.filter((meetup: Meetup) =>
        meetup.name.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1)
        );
    }
  }

}
