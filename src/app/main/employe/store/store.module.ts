import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';

import {reducers} from 'app/main/employe/store';
import {EmployeEffects} from 'app/main/employe/store/effects/employe.effects';

@NgModule({
    imports: [
        StoreModule.forFeature('employe-module', reducers),
        EffectsModule.forFeature([EmployeEffects])
    ],
    providers: []
})
export class EmployeStoreModule {
}
