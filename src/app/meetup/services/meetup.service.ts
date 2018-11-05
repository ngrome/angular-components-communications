import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { API_KEY } from './../../../environments/api';
import { Meetup } from './../models/meetup';

@Injectable()
export class MeetupService {

  private meetupUrl = `https://www.eventbriteapi.com/v3/events/search/?location.latitude=41.89193&location.longitude=12.51133`;

  // Store in local memory
  private meetups: Meetup[];

  // UI State
  private _idActive: string;
  get idActive() {
    return this._idActive;
  }
  private _filter: string;
  get filter() {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
  }

  // Communication with BehaviorSubject
  private selectedMeetupSource = new BehaviorSubject<Meetup | null>(null);
  selectedMeetupChanges$ = this.selectedMeetupSource.asObservable();

  constructor(private http: HttpClient) {}

  getMeetups(): Observable<Meetup[]> {
    if (this.meetups) {
      return of(this.meetups);
    }
    this.meetups = [];
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${API_KEY.eventbrite}`);
    return this.http.get<Meetup[]>(this.meetupUrl, { headers: headers })
    .pipe(
      // tslint:disable-next-line:no-console
      tap(meetups => console.debug(meetups)),
      tap((meetups: any) => meetups.events.map(meetup => {
        this.meetups.push({
          id: meetup.id,
          url: meetup.url,
          name: meetup.name.text,
          logo_url: meetup.logo.url
        });
      })),
      map(() => this.meetups)
    );
  }

  changeSelectedMeetup(selectedMeetup: Meetup | null): void {
    this._idActive = selectedMeetup.id;
    this.selectedMeetupSource.next(selectedMeetup);
}
}
