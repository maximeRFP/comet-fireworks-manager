import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';

import { RfpDirectivesModule } from '@rfp/directives/directives';
import { RfpMaterialColorPickerModule } from '@rfp/components/material-color-picker/material-color-picker.module';
import { RfpSidebarModule } from '@rfp/components/sidebar/sidebar.module';

import { RfpThemeOptionsComponent } from '@rfp/components/theme-options/theme-options.component';

@NgModule({
    declarations: [
        RfpThemeOptionsComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,

        RfpDirectivesModule,
        RfpMaterialColorPickerModule,
        RfpSidebarModule
    ],
    exports     : [
        RfpThemeOptionsComponent
    ]
})
export class RfpThemeOptionsModule
{
}
