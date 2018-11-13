import { NgModule } from '@angular/core';

import { RfpSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        RfpSidebarComponent
    ],
    exports     : [
        RfpSidebarComponent
    ]
})
export class RfpSidebarModule
{
}
