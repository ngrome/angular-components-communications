import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MeetupEffect } from './effects/meetup.effects';
import { meetupReducer } from './reducers/meetup.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('meetupState', meetupReducer),
    EffectsModule.forFeature([MeetupEffect])
  ]
})
export class MeetupStoreModule { }
