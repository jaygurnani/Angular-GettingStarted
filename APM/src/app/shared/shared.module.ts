import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent,
    // JayG: Because we export CommonModule and FormsModule, anyone that imports this module can use these.
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
