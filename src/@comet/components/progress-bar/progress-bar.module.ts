import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

import { CometProgressBarComponent } from './progress-bar.component';

@NgModule({
    declarations: [
        CometProgressBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports     : [
        CometProgressBarComponent
    ]
})
export class CometProgressBarModule
{
}
