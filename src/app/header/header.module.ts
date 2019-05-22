import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiModule } from '../core/material/material-ui.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }

