import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { CometSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        CometSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        CometSearchBarComponent
    ]
})
export class CometSearchBarModule
{
}
