import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { RfpNavigationComponent } from './navigation.component';
import { RfpNavVerticalItemComponent } from './vertical/item/item.component';
import { RfpNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { RfpNavVerticalGroupComponent } from './vertical/group/group.component';
import { RfpNavHorizontalItemComponent } from './horizontal/item/item.component';
import { RfpNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        RfpNavigationComponent
    ],
    declarations: [
        RfpNavigationComponent,
        RfpNavVerticalGroupComponent,
        RfpNavVerticalItemComponent,
        RfpNavVerticalCollapsableComponent,
        RfpNavHorizontalItemComponent,
        RfpNavHorizontalCollapsableComponent
    ]
})
export class RfpNavigationModule
{
}
