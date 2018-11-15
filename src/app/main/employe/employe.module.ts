import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {CometSharedModule} from '@comet/shared.module';

import {MainComponent} from './main/main.component';
import {SocketService} from '../../../@comet/services/socket.service';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {EmployeDetailsComponent} from './employe-details/employe-details.component';
import {EmployeService} from './services/employe.service';

const routes = [
    {
        path: '',
        component: MainComponent
    }
];

@NgModule({
    declarations: [
        MainComponent,
        EmployeListComponent,
        EmployeDetailsComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        TranslateModule,

        CometSharedModule
    ],
    exports: [
        MainComponent
    ],
    providers: [
        SocketService,
        EmployeService
    ]
})

export class EmployeModule {
}
