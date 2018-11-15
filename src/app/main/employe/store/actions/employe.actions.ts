import {Action} from '@ngrx/store';
import {Employe} from '../../models/employe.model';

export const LIST_EMPLOYE = '[Employe] List'; // client -> socket server (side effect)
export const EMPLOYE_LISTED = '[Employe] Listed';         // client -> store

export const ADD_EMPLOYE = '[Employe] Add';  // client -> socket server (side effect)
export const EMPLOYE_ADDED = '[Employe] Added';          // client -> store

export const UPDATE_EMPLOYE = '[Employe] Update'; // same for the rest ...
export const EMPLOYE_UPDATED = '[Employe] Updated';

export const DELETE_EMPLOYE = '[Employe] Delete';
export const EMPLOYE_DELETED = '[Employe] Deleted';


export class ListEmploye implements Action {
    readonly type = LIST_EMPLOYE;
}

export class EmployeListed implements Action {
    readonly type = EMPLOYE_LISTED;

    constructor(public payload?: { [id: string]: Employe }) {
    }
}

export class AddEmploye implements Action {
    readonly type = ADD_EMPLOYE;

    constructor(public payload?: Employe) {
    }
}

export class EmployeAdded implements Action {
    readonly type = EMPLOYE_ADDED;

    constructor(public payload?: Employe) {
    }
}

export class UpdateEmploye implements Action {
    readonly type = UPDATE_EMPLOYE;

    constructor(public payload?: Employe) {
    }
}

export class EmployeUpdated implements Action {
    readonly type = EMPLOYE_UPDATED;

    constructor(public payload?: Employe) {
    }
}

export class DeleteEmploye implements Action {
    readonly type = DELETE_EMPLOYE;

    constructor(public payload?: Employe) {
    }
}

export class EmployeDeleted implements Action {
    readonly type = EMPLOYE_DELETED;

    constructor(public payload?: Employe) {
    }
}

export type All =
    ListEmploye
    | EmployeListed
    | AddEmploye
    | EmployeAdded
    | UpdateEmploye
    | EmployeUpdated
    | DeleteEmploye
    | EmployeDeleted;
