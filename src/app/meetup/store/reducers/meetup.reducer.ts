import { MeetupAction, MeetupActionTypes } from '../actions/meetup.action';
import { Meetup } from '../../models/meetup';

export interface MeetupState {
  meetups: Meetup[];
  meetupSelected: Meetup;
}

const initialState: MeetupState = {
  meetups: [],
  meetupSelected: null
};

export function meetupReducer(state = initialState, action: MeetupAction): MeetupState {
  switch (action.type) {
    case MeetupActionTypes.LoadMeetups:
      return state;
    case MeetupActionTypes.LoadMeetupsSuccess:
      return {
        meetups: action.payload,
        meetupSelected: state.meetupSelected
      };
    case MeetupActionTypes.LoadMeetupsFail:
      return state;
  }
  return state;
}
