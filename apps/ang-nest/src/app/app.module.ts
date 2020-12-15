import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UIComponentsModule } from '@dp/ui-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UIComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
