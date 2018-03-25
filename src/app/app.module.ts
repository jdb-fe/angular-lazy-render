import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LazyRenderModule } from '@jdb/angular-lazy-render';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LazyRenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
