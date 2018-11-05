import { Action } from '@ngrx/store';
import { Meetup } from './../../models/meetup';

export enum MeetupActionTypes {
  LoadMeetups = '[DASHBOARD MEETUP] Loading Meetups',
  LoadMeetupsSuccess = '[DASHBOARD MEETUP] Load Meetups Success',
  LoadMeetupsFail = '[DASHBOARD MEETUP] Load Meetups Fail',
}

export class LoadMeetups implements Action {
  readonly type = MeetupActionTypes.LoadMeetups;
  constructor() {}
}

export class LoadMeetupsSuccess implements Action {
  readonly type = MeetupActionTypes.LoadMeetupsSuccess;
  constructor(public payload: Meetup[]) {}
}

export class LoadMeetupsFail implements Action {
  readonly type = MeetupActionTypes.LoadMeetupsFail;
  constructor() {}
}

export type MeetupAction
  = LoadMeetups
  | LoadMeetupsSuccess
  | LoadMeetupsFail;
