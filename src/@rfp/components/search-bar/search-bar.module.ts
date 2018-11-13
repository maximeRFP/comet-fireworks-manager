import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { RfpSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        RfpSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        RfpSearchBarComponent
    ]
})
export class RfpSearchBarModule
{
}
