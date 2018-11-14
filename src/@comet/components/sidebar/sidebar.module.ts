import { NgModule } from '@angular/core';

import { CometSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        CometSidebarComponent
    ],
    exports     : [
        CometSidebarComponent
    ]
})
export class CometSidebarModule
{
}
