import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NTheaderModule } from './modules/ntheader/ntheader.module';
import { NTSlideBarModule } from './modules/ntslide-bar/ntslide-bar.module';
import { NTFooterModule } from './modules/ntfooter/ntfooter.module';
import { NTLoginModule } from './modules/ntlogin/ntlogin.module';

import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NTLoginModule,
    NTheaderModule,
    NTSlideBarModule,
    NTFooterModule,
    NgbModule,
    NgbButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
