import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParaMouseModule } from '../../projects/ngx-para-mouse/src/public-api';

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
