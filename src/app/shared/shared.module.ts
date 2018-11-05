import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FilterComponent } from './components/filter/filter.components';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    FilterComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    FilterComponent
  ]
})
export class SharedModule { }
