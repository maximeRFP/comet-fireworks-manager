import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { CometConfirmDialogComponent } from '@comet/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        CometConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        CometConfirmDialogComponent
    ],
})
export class CometConfirmDialogModule
{
}
