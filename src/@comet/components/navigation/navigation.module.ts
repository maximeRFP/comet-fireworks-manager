import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { CometNavigationComponent } from './navigation.component';
import { CometNavVerticalItemComponent } from './vertical/item/item.component';
import { CometNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { CometNavVerticalGroupComponent } from './vertical/group/group.component';
import { CometNavHorizontalItemComponent } from './horizontal/item/item.component';
import { CometNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        CometNavigationComponent
    ],
    declarations: [
        CometNavigationComponent,
        CometNavVerticalGroupComponent,
        CometNavVerticalItemComponent,
        CometNavVerticalCollapsableComponent,
        CometNavHorizontalItemComponent,
        CometNavHorizontalCollapsableComponent
    ]
})
export class CometNavigationModule
{
}
