import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NTLoginComponent } from '../ntlogin/ntlogin.component';

@NgModule({
  declarations: [NTLoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NTLoginComponent
  ]
})
export class NTLoginModule { }
