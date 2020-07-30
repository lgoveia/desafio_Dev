import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { IconsModule } from './components/icons/icons.module';
import { MAT_FORM_FIELD_OUTLINE_APPEARANCE } from './util/material-design.config';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [SearchInputComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    IconsModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    IconsModule,

    SearchInputComponent
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: MAT_FORM_FIELD_OUTLINE_APPEARANCE
    },
  ]
})
export class SharedModule { }
