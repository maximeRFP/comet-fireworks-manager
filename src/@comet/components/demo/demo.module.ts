import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatListModule } from '@angular/material';

import { CometDemoContentComponent } from './demo-content/demo-content.component';
import { CometDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        CometDemoContentComponent,
        CometDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        CometDemoContentComponent,
        CometDemoSidebarComponent
    ]
})
export class CometDemoModule
{
}
