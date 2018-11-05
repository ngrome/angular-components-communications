import { Component, OnInit } from '@angular/core';

import { MeetupService } from '../../services/meetup.service';
import { Meetup } from '../../models/meetup';

@Component({
  selector: 'ngrome-meetup-detail',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css']
})
export class MeetupDetailsComponent implements OnInit {

  meetup: Meetup;
  constructor(public meetupService: MeetupService) { }

  ngOnInit() {
    this.meetupService.selectedMeetupChanges$.subscribe(
      meetup => this.meetup = meetup
    );
  }

}
