import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Employe} from '../models/employe.model';
import * as fromEmployeStore from '../store';
import {Observable} from 'rxjs/Observable';
import {Store} from "@ngrx/store";

@Component({
    selector: 'comet-employe-list',
    templateUrl: './employe-list.component.html',
    styleUrls: ['./employe-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeListComponent implements OnInit{
    employes$: Observable<Employe[]>;

    /**
     * Constructor
     *
     */
    constructor(private store: Store<fromEmployeStore.State>) {
    }

    ngOnInit(): void {
        this.employes$ = this.store.select(fromEmployeStore.getEntitiesArray);
    }
}
