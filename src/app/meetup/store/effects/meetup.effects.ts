import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, tap, map } from 'rxjs/operators';

import { MeetupService } from '../../services/meetup.service';
import * as meetupActions from './../actions/meetup.action';
import { Meetup } from '../../models/meetup';

@Injectable()
export class MeetupEffect {

  constructor(
    private meetupService: MeetupService,
    private actions$: Actions
  ) {}

  @Effect() loadMeetups$ = this.actions$.pipe(
    ofType(meetupActions.MeetupActionTypes.LoadMeetups),
    switchMap( () => this.meetupService.getMeetups()
      .pipe(
        tap( (meetups: Meetup[]) => console.log('EFFECT', meetups)),
        map((meetups: Meetup[]) => new meetupActions.LoadMeetupsSuccess(meetups))
      )
    )
  );


}
