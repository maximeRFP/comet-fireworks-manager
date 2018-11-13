import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { RfpConfirmDialogComponent } from '@rfp/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        RfpConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        RfpConfirmDialogComponent
    ],
})
export class RfpConfirmDialogModule
{
}
