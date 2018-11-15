import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {EmployeService} from '../../services/employe.service';
import * as employeActions from '../actions/employe.actions';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';


@Injectable()

export class EmployeEffects {

    @Effect({dispatch: false}) // effect will not dispatch any actions
    listEmployes$ = this.actions$
        .ofType(employeActions.LIST_EMPLOYE) // requesting the socket server to list the employes for us
        .startWith(new employeActions.EmployeListed()) // List employes automatically when applications starts
        .do(() => this.employeService.listEmploye());

    @Effect()
    employeListed$: Observable<Action> =
        this.employeService.employeListed$ // listen to the socket for EMPLOYE LIST event
            .switchMap(employe =>
                Observable.of(new employeActions.EmployeListed(employe)) // ask the the store to populate the employe
            );

    @Effect({dispatch: false})
    addEmploye$ = this.actions$
        .ofType(employeActions.ADD_EMPLOYE)
        .map((action: employeActions.AddEmploye) => action.payload)
        .do((employe) => this.employeService.addEmploye(employe));

    @Effect()
    employeAdded$: Observable<Action> =
        this.employeService.employeAdded$
            .switchMap(employe =>
                Observable.of(new employeActions.EmployeAdded(employe))
            );

    @Effect({dispatch: false})
    updateEmploye$ = this.actions$
        .ofType(employeActions.UPDATE_EMPLOYE)
        .map((action: employeActions.UpdateEmploye) => action.payload)
        .do((employe) => this.employeService.updateEmploye(employe));

    @Effect()
    employeUpdated$: Observable<Action> =
        this.employeService.employeUpdated$
            .switchMap(employe =>
                Observable.of(new employeActions.EmployeUpdated(employe))
            );

    @Effect({dispatch: false})
    deleteEmploye$ = this.actions$
        .ofType(employeActions.DELETE_EMPLOYE)
        .map((action: employeActions.UpdateEmploye) => action.payload)
        .do((employe) => this.employeService.deleteEmploye(employe));

    @Effect()
    employeDeleted$: Observable<Action> =
        this.employeService.employeDeleted$
            .switchMap(employe =>
                Observable.of(new employeActions.EmployeDeleted(employe))
            );

    constructor(private actions$: Actions, private employeService: EmployeService) {
    }
}
