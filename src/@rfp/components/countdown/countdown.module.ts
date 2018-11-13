import { NgModule } from '@angular/core';

import { RfpCountdownComponent } from '@rfp/components/countdown/countdown.component';

@NgModule({
    declarations: [
        RfpCountdownComponent
    ],
    exports: [
        RfpCountdownComponent
    ],
})
export class RfpCountdownModule
{
}
