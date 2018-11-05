import { FilterComponent } from './../../../shared/components/filter/filter.components';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MeetupService } from '../../services/meetup.service';
import { Meetup } from '../../models/meetup';

@Component({
  templateUrl: './meetup-dashboard.component.html',
  styleUrls: ['./meetup-dashboard.component.css']
})
export class MeetupDashboardComponent implements OnInit {

  public meetups: Meetup[];
  filteredMeetups: Meetup[];
  @ViewChild(FilterComponent) filterComponent: FilterComponent;

  constructor(private meetupService: MeetupService) { }

  ngOnInit() {
    this.meetupService.getMeetups().subscribe(
      (meetups: Meetup[]) => {
        this.meetups = meetups;
        this.filterComponent.filter = this.meetupService.filter;
      },
      (error: any) => console.error('Errore', error)
    );
  }

  onValueChange(value: string): void {
    this.meetupService.filter = value;
    this.performFilter(value);
  }

  performFilter(filterBy?: string): void {
    if (filterBy) {
        this.filteredMeetups = this.meetups.filter((meetup: Meetup) =>
        meetup.name.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
    } else {
        this.filteredMeetups = this.meetups;
    }
  }

}
