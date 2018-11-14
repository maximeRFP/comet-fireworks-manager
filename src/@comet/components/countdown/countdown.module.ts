import { NgModule } from '@angular/core';

import { CometCountdownComponent } from '@comet/components/countdown/countdown.component';

@NgModule({
    declarations: [
        CometCountdownComponent
    ],
    exports: [
        CometCountdownComponent
    ],
})
export class CometCountdownModule
{
}
