import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appState$: Observable<AppState>;

  constructor(public store: Store<AppState>) {
    this.appState$ = this.store;
  }
}
