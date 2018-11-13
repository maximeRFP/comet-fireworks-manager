import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RfpSharedModule } from '@rfp/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        RfpSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
