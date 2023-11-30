import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestcomponentComponent } from './restcomponent/restcomponent.component';
import {HttpClientModule} from '@angular/common/http';
import { NodeServerComponent } from './node-server/node-server.component';

@NgModule({
  declarations: [
    AppComponent,
    RestcomponentComponent,
    NodeServerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
