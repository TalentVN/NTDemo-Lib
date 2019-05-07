import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NTSlideBarComponent } from './ntslide-bar.component';

@NgModule({
  declarations: [NTSlideBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NTSlideBarComponent
  ],
})
export class NTSlideBarModule { }
