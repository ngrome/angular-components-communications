import * as fromMeetup from './../meetup/store/reducers/meetup.reducer';

export interface AppState {
  meetupState: fromMeetup.MeetupState;
}

export const initialState: AppState = {
  meetupState: null
};
