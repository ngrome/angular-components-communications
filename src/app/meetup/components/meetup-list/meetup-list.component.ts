import { MeetupListItemComponent } from './../meetup-list-item/meetup-list-item.component';
import { Component, OnInit, Input, ViewChildren, ChangeDetectionStrategy } from '@angular/core';
import { Meetup } from '../../models/meetup';
import { MeetupService } from '../../services/meetup.service';

@Component({
  selector: 'ngrome-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetupListComponent implements OnInit {

  @Input()
  meetups: Meetup[];
  @ViewChildren(MeetupListItemComponent) children: MeetupListItemComponent[];

  constructor(private meetupService: MeetupService) { }

  ngOnInit() {
  }

  handleSelection(meetup) {
    this.meetupService.changeSelectedMeetup(meetup);
    this.children.map(child => child.idActive = meetup.id);
  }

}
