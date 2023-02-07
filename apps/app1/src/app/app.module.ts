import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ButtonsModule} from "@inc-buildable-test/buttons";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ButtonsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
