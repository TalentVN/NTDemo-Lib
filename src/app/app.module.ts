import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NTheaderModule } from './modules/ntheader/ntheader.module';
import { NTSlideBarModule } from './modules/ntslide-bar/ntslide-bar.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NTheaderModule,
    NTSlideBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
