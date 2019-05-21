import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiModule } from '../core/material/material-ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiModule,
    RouterModule
  ]
})
export class HeaderModule { }

