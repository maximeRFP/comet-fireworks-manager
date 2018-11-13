import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatListModule } from '@angular/material';

import { RfpDemoContentComponent } from './demo-content/demo-content.component';
import { RfpDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        RfpDemoContentComponent,
        RfpDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        RfpDemoContentComponent,
        RfpDemoSidebarComponent
    ]
})
export class RfpDemoModule
{
}
