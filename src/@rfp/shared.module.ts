import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { RfpDirectivesModule } from '@rfp/directives/directives';
import { RfpPipesModule } from '@rfp/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        RfpDirectivesModule,
        RfpPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        RfpDirectivesModule,
        RfpPipesModule
    ]
})
export class RfpSharedModule
{
}
