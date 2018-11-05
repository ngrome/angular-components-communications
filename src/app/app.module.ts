import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './home/navbar/navbar.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { PageNotFoundComponent } from './home/404/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WelcomeComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
