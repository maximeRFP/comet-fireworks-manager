import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { CometModule } from '@comet/comet.module';
import { CometSharedModule } from '@comet/shared.module';
import { CometProgressBarModule, CometSidebarModule, CometThemeOptionsModule } from '@comet/components';

import { cometConfig } from 'app/comet-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Comet modules
        CometModule.forRoot(cometConfig),
        CometProgressBarModule,
        CometSharedModule,
        CometSidebarModule,
        CometThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
