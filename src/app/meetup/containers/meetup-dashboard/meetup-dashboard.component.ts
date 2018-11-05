import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../../services/meetup.service';

@Component({
  templateUrl: './meetup-dashboard.component.html',
  styleUrls: ['./meetup-dashboard.component.css']
})
export class MeetupDashboardComponent implements OnInit {

  constructor(private meetupService: MeetupService) { }

  ngOnInit() {
    this.meetupService.getMeetups().subscribe(
      meetups => console.log(meetups),
      error => console.error('Errore', error)
    );
  }

}
