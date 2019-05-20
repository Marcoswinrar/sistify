import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Mat from '@angular/material';

@NgModule({
  exports: [FlexLayoutModule, Mat.MatToolbarModule, Mat.MatButtonModule, Mat.MatTabsModule, Mat.MatIconModule,
  Mat.MatMenuModule]
})
export class MaterialUiModule { }