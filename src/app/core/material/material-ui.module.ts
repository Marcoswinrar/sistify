import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as Mat from '@angular/material';

@NgModule({
  exports: [
    FlexLayoutModule, Mat.MatToolbarModule, Mat.MatButtonModule, Mat.MatTabsModule, Mat.MatIconModule,
    Mat.MatMenuModule, Mat.MatCardModule, Mat.MatTooltipModule, Mat.MatExpansionModule, Mat.MatInputModule,
    Mat.MatRadioModule
  ]
})
export class MaterialUiModule { }
