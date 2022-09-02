import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from '@ng-test/lib1';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, Lib1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
