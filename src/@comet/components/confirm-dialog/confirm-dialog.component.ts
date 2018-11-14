import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'comet-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class CometConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<CometConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<CometConfirmDialogComponent>
    )
    {
    }

}
