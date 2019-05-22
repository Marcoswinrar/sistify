import { NgModule } from '@angular/core';
import { DialogModule } from '../dialog/dialog.module';
import { ActionService } from './action.service';
import { DefaultActionService } from './default-action.service';

@NgModule({
  imports: [DialogModule],
  providers: [
    {
      provide: ActionService,
      useClass: DefaultActionService
    }
  ]
})
export class ActionModule { }
