import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { API_KEY } from './../../../environments/api';
import { Meetup } from './../models/meetup';

@Injectable()
export class MeetupService {

  private meetupUrl = `https://www.eventbriteapi.com/v3/events/search/?location.latitude=41.89193&location.longitude=12.51133`;
  private meetups: any[];

  constructor(private http: HttpClient) {}

  getMeetups(): Observable<Meetup[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${API_KEY.eventbrite}`);
    return this.http.get<Meetup[]>(this.meetupUrl, { headers: headers })
    .pipe(
      // tslint:disable-next-line:no-console
      tap(meetups => console.debug(meetups)),
      map((meetups: any) => meetups.events.map(meetup => {
        return {
          id: meetup.id,
          url: meetup.url,
          name: meetup.name.text,
          logo_url: meetup.logo.url
        };
      }))
    );
  }
}
