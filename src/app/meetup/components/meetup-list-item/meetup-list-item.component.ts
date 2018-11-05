import { Component, OnInit, Input } from '@angular/core';

import { Meetup } from '../../models/meetup';
import { MeetupService } from './../../services/meetup.service';

@Component({
  selector: 'ngrome-meetup-list-item',
  templateUrl: './meetup-list-item.component.html',
  styleUrls: ['./meetup-list-item.component.css']
})
export class MeetupListItemComponent implements OnInit {

  @Input()
  meetup: Meetup;

  public idActive: string;

  constructor(private meetupService: MeetupService) { }

  ngOnInit() {
    this.idActive = this.meetupService.idActive;
  }
}
