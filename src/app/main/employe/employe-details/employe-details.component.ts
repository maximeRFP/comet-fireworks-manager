import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'comet-employe-details',
    templateUrl: './employe-details.component.html',
    styleUrls: ['./employe-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeDetailsComponent {
    /**
     * Constructor
     *
     */
    constructor() {
    }
}
