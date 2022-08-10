import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@bike-store/ui';
import { HeaderModule } from '@bike-store/header';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, UiModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
