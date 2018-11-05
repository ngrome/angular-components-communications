import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PageNotFoundComponent } from './home/404/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LandingPageComponent,
        children: [
          { path: 'welcome', component: WelcomeComponent },
          {
            path: 'meetup',
            // canActivate: [AuthGuard],
            loadChildren: './meetup/meetup.module#MeetupModule'
          },
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          { path: '**', component: PageNotFoundComponent }
        ],

      },

    ]) // , { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
