import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {storeFreeze} from 'ngrx-store-freeze';

import {environment} from 'environments/environment';
import {reducers} from 'app/store';

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze]
    : [];

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [
    ]
})

export class AppStoreModule {
}
