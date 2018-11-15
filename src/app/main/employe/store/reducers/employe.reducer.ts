import {Employe} from '../../models/employe.model';
import * as employeActions from '../actions/employe.actions';
import {createSelector} from '@ngrx/store';

export interface State {
    ids: string[];
    entities: { [id: string]: Employe };
    selectedEmployeId: string;
}

export const employeInitialState: State = {
    ids: [],
    entities: {},
    selectedEmployeId: null
};


export function reducer(state = employeInitialState, action: employeActions.All): State {

    switch (action.type) {

        case employeActions.EMPLOYE_LISTED : {

            const ids = Object.keys(action.payload);
            return {
                ...state,
                ids,
                entities: action.payload
            };

        }

        case employeActions.EMPLOYE_ADDED : {

            // if employe already exists
            if (state.ids.includes(action.payload.id)) {
                return state;
            }

            return {
                ...state,
                ids: [...state.ids, action.payload.id],
                entities: Object.assign({}, state.entities, {[action.payload.id]: action.payload})
            };

        }


        case employeActions.EMPLOYE_UPDATED : {

            const newState = Object.assign({}, state);
            const employe = newState.entities[action.payload.id];

            // employe doesn't exist in the store
            if (!employe) {
                newState.ids = [...newState.ids, action.payload.id];
                newState.entities[action.payload.id] = action.payload; // create it
            } else {
                newState.entities[action.payload.id] = Object.assign({}, {...employe}, {...action.payload});
            }
            return newState;
        }


        case employeActions.EMPLOYE_DELETED : {

            if (!state.entities[action.payload.id]) {
                return state;
            }

            const newState = Object.assign({}, state);

            const idIndex = newState.ids.indexOf(action.payload.id);
            newState.ids.splice(idIndex, 1);
            newState.entities[action.payload.id] = undefined;

            return newState;
        }

        default:
            return state;
    }
}

export const getEntites = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getSelectedId = (state: State) => state.selectedEmployeId;

export const getSelected = createSelector(
    getEntites,
    getSelectedId,
    (entities, id) => entities[id]
);

export const getEntitesArray = (state: State) => state.ids.map(id => state.entities[id]);
