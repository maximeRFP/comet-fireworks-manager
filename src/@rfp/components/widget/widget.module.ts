import { NgModule } from '@angular/core';

import { RfpWidgetComponent } from './widget.component';
import { RfpWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        RfpWidgetComponent,
        RfpWidgetToggleDirective
    ],
    exports     : [
        RfpWidgetComponent,
        RfpWidgetToggleDirective
    ],
})
export class RfpWidgetModule
{
}
