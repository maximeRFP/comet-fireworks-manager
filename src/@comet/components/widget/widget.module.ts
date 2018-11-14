import { NgModule } from '@angular/core';

import { CometWidgetComponent } from './widget.component';
import { CometWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        CometWidgetComponent,
        CometWidgetToggleDirective
    ],
    exports     : [
        CometWidgetComponent,
        CometWidgetToggleDirective
    ],
})
export class CometWidgetModule
{
}
