import { NgModule } from '@angular/core';

import { CometIfOnDomDirective } from '@comet/directives/comet-if-on-dom/comet-if-on-dom.directive';
import { CometInnerScrollDirective } from '@comet/directives/comet-inner-scroll/comet-inner-scroll.directive';
import { CometPerfectScrollbarDirective } from '@comet/directives/comet-perfect-scrollbar/comet-perfect-scrollbar.directive';
import { CometMatSidenavHelperDirective, CometMatSidenavTogglerDirective } from '@comet/directives/comet-mat-sidenav/comet-mat-sidenav.directive';

@NgModule({
    declarations: [
        CometIfOnDomDirective,
        CometInnerScrollDirective,
        CometMatSidenavHelperDirective,
        CometMatSidenavTogglerDirective,
        CometPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        CometIfOnDomDirective,
        CometInnerScrollDirective,
        CometMatSidenavHelperDirective,
        CometMatSidenavTogglerDirective,
        CometPerfectScrollbarDirective
    ]
})
export class CometDirectivesModule
{
}
