import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParaMouseModule } from 'ngx-para-mouse';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParaMouseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
