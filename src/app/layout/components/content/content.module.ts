import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CometSharedModule } from '@comet/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        CometSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
