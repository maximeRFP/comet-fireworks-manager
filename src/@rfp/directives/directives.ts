import { NgModule } from '@angular/core';

import { RfpIfOnDomDirective } from '@rfp/directives/rfp-if-on-dom/rfp-if-on-dom.directive';
import { RfpInnerScrollDirective } from '@rfp/directives/rfp-inner-scroll/rfp-inner-scroll.directive';
import { RfpPerfectScrollbarDirective } from '@rfp/directives/rfp-perfect-scrollbar/rfp-perfect-scrollbar.directive';
import { RfpMatSidenavHelperDirective, RfpMatSidenavTogglerDirective } from '@rfp/directives/rfp-mat-sidenav/rfp-mat-sidenav.directive';

@NgModule({
    declarations: [
        RfpIfOnDomDirective,
        RfpInnerScrollDirective,
        RfpMatSidenavHelperDirective,
        RfpMatSidenavTogglerDirective,
        RfpPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        RfpIfOnDomDirective,
        RfpInnerScrollDirective,
        RfpMatSidenavHelperDirective,
        RfpMatSidenavTogglerDirective,
        RfpPerfectScrollbarDirective
    ]
})
export class RfpDirectivesModule
{
}
