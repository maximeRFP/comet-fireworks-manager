import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'rfp-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class RfpConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<RfpConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<RfpConfirmDialogComponent>
    )
    {
    }

}
