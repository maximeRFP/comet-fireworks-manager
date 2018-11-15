import * as fromEmploye from './reducers/employe.reducer';
import * as fromRoot from '../../../store';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export interface EmployeState {
    employe: fromEmploye.State;
}

export interface State extends fromRoot.State {
    'employe': EmployeState;
}

export const reducers = {
    employe: fromEmploye.reducer
};


export const getEmployeRootState = createFeatureSelector<EmployeState>('employe');
export const getEmployeState = createSelector(getEmployeRootState, (employeState: EmployeState) => employeState.employe);

export const getEntites = createSelector(getEmployeState, fromEmploye.getEntites);
export const getIds = createSelector(getEmployeState, fromEmploye.getIds);
export const getSelectedId = createSelector(getEmployeState, fromEmploye.getSelectedId);
export const getSelected = createSelector(getEmployeState, fromEmploye.getSelected);
export const getEntitiesArray = createSelector(getEmployeState, fromEmploye.getEntitesArray);